//require orm

var orm = require('../config/orm')

var burger = {
    selectAll : function(cb){
        orm.selectAll('burgers',function(res){
            cb(res);
        });
    },
    insertOne : function(col,val,cb){
        orm.insertOne('burgers',col,val,function(res){
            cb(res);
        });
    },
    updateOne : function(col,newVal,id,cb){
        orm.updateOne('burgers',col,newVal,function(res){
            cb(res);
        });
    },
}

//export the models

module.exports = burger;