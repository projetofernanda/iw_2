const mysql = require('mysql')
const { clearScreenDown } = require('readline')

class CarroDB {

    static connect(){
        const connection = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database: "auto"
        })
        connection.connect()
        return connection
    }
    static getCarros(callback){
        let connection = CarroDB.connect
        let sql = "select * from carro"
        let query = connection.query(sql, function(err,results, fields){
            if(err) throw err
            callback(results)
        })
        console.log(query.sql)
        connection.end()
}
//Realiza consulta pelo tipo
    static getCarrosTipo(tipo, callback){
        let connection = CarroDB.connect
        let sql = "select * from carro where tipo = '" + tipo + "'"
        let query = connection(sql, function(err,results,fields){
            if(err) throw err
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }
    static save(carro, callback){
        const connection = CarroDB.connect()
        let sql = "insert into carro set ?"
        let query = connection.query(sql, carro, function(err,results,fields){
            if(err) throw err
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }
    static update(carro, callback){
        const connection = CarroDB.connect()
        let sql = "update carro set ? where id = ?"
        let id = carro.id
        let query = connection.query(sql,[carro,id], function(err,results,fields){
            if(err) throw err
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }
    static delete(carro, callback){
        let sql = "delete from carro where id = ?"
        let id = carro.id
        let query = connection.query(sql, id, function(err,results,fields){
            if(err) throw err
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }
    static delete(id, callback){
        let sql = "delete from carro where id = ?"
        let query = this.connection.query(sql, id, function(err,results,fields){
            if(err) throw err
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

}