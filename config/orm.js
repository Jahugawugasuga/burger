// Import MySQL connection.
var connection = require("../config/connection.js");
var orm = {
  all: function(tableInput) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    // connection.query(queryString, function(err, result) {
    //   if (err) {
    //     throw err;
    //   }
    //   cb(result);
    // });
  },
  create: function(table, cols, vals) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    // connection.query(queryString, vals, function(err, result) {
    //   if (err) {
    //     throw err;
    //   }

    //   cb(result);
    // });
  },
  update: function(table, objColVals, condition) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

  },
  delete: function(table, condition) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

  }
};
module.exports = orm;
