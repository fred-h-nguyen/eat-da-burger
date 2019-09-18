//require connection for orm
var connection = require('./connection');

var orm = {
    selectAll: function (tbl, cb) {
        connection.query('SELECT * FROM ??', [tbl], function (err, result) {
            if (err) {
                throw (err)
            }
            cb(result);
        });
    },
    insertOne: function (tbl, col, val, cb) {
        connection.query('INSERT INTO ?? (??) VALUES (?)', [tbl, col, val], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function (tbl, col, newVal, id, cb) {
        connection.query('UPDATE ?? SET ?? = ? WHERE id = ??', [tbl, col, newVal, id], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
}

//export orm

module.exports = orm;