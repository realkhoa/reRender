const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const db = new sqlite3.Database(path.join(__dirname, 'db.db'));

function getAllCategory() {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all('SELECT * FROM CATEGORY', (err, rows) => resolve(rows))
        })
    })
}

function getCategoryContent(category_id) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all('SELECT * FROM CATEGORY_CONTENT WHERE CATEGORY_ID = ?', category_id, (err, rows) => resolve(rows))
        })
    })
}

function updateCategoryID(content_id, category_id) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all('UPDATE CATEGORY_CONTENT SET CATEGORY_ID = ? WHERE ID = ?', [category_id, content_id], (err, rows) => resolve(rows))
        })
    })
}



module.exports = {
    getAllCategory,
    getCategoryContent,
    updateCategoryID
}