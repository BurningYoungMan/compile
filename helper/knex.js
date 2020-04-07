var knex = require('knex')
var {
    host,
    user,
    password,
    database,
    debug,
    timeout,
    minPool,
    maxPool
} = require('../config/mysql')
module.exports = knex({
    client: 'mysql',
    connection: {
        host: host,
        user: user,
        password: password,
        database: database,
        charset: 'utf8mb4',
    },
    debug: true,
    pool: {
        min: minPool,
        max: maxPool
    },
    acquireConnectionTimeout: timeout,
    log: {

    }
})