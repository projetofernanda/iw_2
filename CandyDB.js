const mysql = require('mysql')

class CandyDB {

    static connect(){
        const connect = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "candy"
        })
        connection.connect()
        return connection
    }

    static getCadies(callback){
        const connection = CandyDB.connect()
        let sql = "select * from candy"
        let query = connect.query(sql,function(err,results,fields){
            if(err) throw err
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }
}

module.exports = CandyDB