const Role = require('../../models/Role.model');

const seed = async () => {
    console.log('Role seed started......');
    const roles = [
        {role: "admin"},
        {role: "user"}
    ];

    await Role.insertMany(roles);
    
    console.log('Role seed completed......');
}

module.exports = seed;