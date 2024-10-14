const roleseed = require('./seeder/role.seed');
const userseed = require('./seeder/user.seed');

const migrate = async () => {
    await roleseed();
    await userseed();
}

migrate();