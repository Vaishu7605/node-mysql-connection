mysql = require('mysql');

conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentdb'
})

conn.connect((err)=>{
    if (err) throw err
    console.log('connected successfully !!!')
    a = "create table alld (name varchar(50), age int(3), mail varchar(35))"
    conn.query(a,(err, res) =>{
        if(err) throw err
        console.log('table created successfully!!!')
    })
})