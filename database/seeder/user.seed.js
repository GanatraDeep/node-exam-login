const Role = require('../../models/Role.model');
const User = require('../../models/User.model');
const {hash} = require('../../globals/hash.function');

const seed = async () => {
    console.log('User seed started....');

    const password = await hash("admin@123@");
    const role = await Role.findOne({"role": "admin"});

    const admin = new User();
    admin.name = "Deep Ganatra"
    admin.email = "demo@gmail.com"
    admin.password = password
    admin.role = role._id

    await admin.save();

    console.log('User seed completed....');
}

module.exports = seed;