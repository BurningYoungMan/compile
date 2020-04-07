var knex = require('../helper/knex')

async function getStr() {
    var str = await knex('app')
        .where({ id: 1 })
        .select()
    return str
}

module.exports = {
    getStr: getStr
}