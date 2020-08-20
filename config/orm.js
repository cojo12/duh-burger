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
    let queryString = `UPDATE burgers SET devoured=${val} WHERE var connection = require("../config/connection.js");

    function printQuestionMarks(num) {
      var arr = [];
    
      for (var i = 0; i < num; i++) {
        arr.push("?");
      }
    
      return arr.toString();
    }
    
    function objToSql(ob) {
      var arr = [];
      for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          arr.push(key + "=" + value);
        }
      }
    
      return arr.toString();
    }
    
    var orm = {
    
      all: function(tableInput, cb) {
        var all = "SELECT * FROM " + tableInput + ";";
        connection.query(all, function(err, res){
          if (err) {
            throw err;
          }
          cb(res);
        });
      },
    
      create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    
      update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    }
    
    module.exports = orm;id = ${id}`;
    connection.query( queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        }
    );
},
};

module.exports = orm;

