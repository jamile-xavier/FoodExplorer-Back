const config = require("../../../knexfile");
const knex = require("knex");

const Connection = knex(config.development);

module.exports = Connection;
