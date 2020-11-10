const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bbx_ovialand"
})

// const connection = mysql.createConnection({
//     host: "remotemysql.com",
//     user: "MwCKWmACiT",
//     password: "TLKnCShDUX",
//     database: "MwCKWmACiT"
// })

connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    // console.log(connection.threadId) 
});

module.exports = connection;
