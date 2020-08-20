var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(data => {
      cb(res);
    });
  },

  insertOne: function (burger, name, cb) {
    orm.insertOne(burger, name, function (res) {
      cb(res);
    });
  },

  updateOne: function (val, id, cb) {
    let devoured = val.devoured;
    orm.updateOne(devoured, id, function (results) {
      cb(results);
    });
  }
}

module.exports = burger;
