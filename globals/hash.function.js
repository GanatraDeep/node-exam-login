const bcrypt = require('bcrypt');
require('dotenv').config();

const key = process.env.HASHKEY;

const hash = async (data) => {
    const h = await bcrypt.hash(data, 10);
    return h;
}

const compare = async (data, h) => {
    const r = await bcrypt.compare(data, h);
    return r;
}

module.exports = {hash, compare}