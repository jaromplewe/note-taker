var fs = require('fs');
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = (app) => {
    app.get('api/notes', function(req, res) {
        res.json(data);
    })
   
    app.post('api/notes', function(req, res) {
        // reads and returns db.json
    })
}