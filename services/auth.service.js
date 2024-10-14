const Role = require('../models/Role.model');
const User = require('../models/User.model');
const {compare, hash} = require('../globals/hash.function');

const login = async (email, password) => {
    const u = await User.findOne({"email": email}).populate('role');
    if(!u)
        return {success: false, message: "User not found"}
    const r = await compare(password, u.password);
    if(!r)
        return {success: false, message: "User not found"}
    return {success: true, user: u};
}

const register = async (name, email, password, role) => {
    const u = new User();
    u.name = name;
    u.email = email;
    u.role = role;
    u.password = await hash(password);

    await u.save();
}

const getRoles = async () => {
    const r = await Role.find({});
    return r;
}

module.exports = {login, register, getRoles};