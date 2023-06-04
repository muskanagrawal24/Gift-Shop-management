var mysql=require('mysql')
var pool=mysql.createPool({
host:'localhost',
port:3306,
user:'root',
password:'2000',
database:'gift_shop',
connectionLimit:100


})

module.exports = pool;