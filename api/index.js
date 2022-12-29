const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors')

const db = require('./db/db.js')

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => res.send('nhin cl'))

app.get('/allCategory', (req, res) => {
    db.getAllCategory()
      .then(r => res.send(r))
})

app.get('/categoryContent', (req, res) => {
    db.getCategoryContent(req.query.category_id)
      .then(r => res.send(r))
})

app.get('/updateContentCategoryID', (req, res) => {
    db.updateCategoryID(req.query.content_id, req.query.category_id);
})
app.listen(5000, () => console.log("running"));
