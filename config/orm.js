const connection = require("./connection.js");

var orm = {
  selectAll: function(cb) { 
    let queryString = "SELECT * FROM burgers";
    connection.query (queryString, (err, data) => {
        if (err) throw err;
        cb(data)
    });
  },
  insertOne: function(col, val, cb) {
    let queryString = `INSERT INTO burgers (${col}) VALUES (?)`;
    connection.query (queryString, val, (err, data) => {
        if (err) throw err;
        cb(data)
    });
  },
  updateOne: function(val, id, cb) {
    let queryString = `UPDATE burgers SET devoured=${val} WHERE id = ${id}`;
    connection.query( queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        }
    );
},
};

module.exports = orm;

