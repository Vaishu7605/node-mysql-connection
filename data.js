mysql = require('mysql');

conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentdb'
})

conn.connect((error) => {
    if(error) throw error;
    else{console.log('connectedd!!!!!')}
    a = " insert into alld(name, age, mail) values('vaishu', 20, 'vaishnavikesherwani786@gmail.com')"
    conn.query(a, (err,res)=>{
        if(error) throw error;
        else{
            console.log('inserted successfully!!!!!')
        }
    })
})