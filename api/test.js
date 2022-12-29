const db = require('./db/db.js')

db.getAllCategory().then(res => console.log(res))