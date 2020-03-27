const Datastore = require('nedb')
const dbName = 'data.db'

const db = new Datastore({
  filename: dbName,
  autoload: true
})

module.exports = db
