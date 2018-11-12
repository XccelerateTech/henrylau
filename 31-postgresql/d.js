const pg = require('pg');
const pw = require('./pw.js');

let config ={
    user: 'henry',
    database: 'fruits',
    password: pw,
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}

let client = new pg.Client(config);
client.connect();
client.query("SELECT * FROM citrus WHERE color = 'yellow'", (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.rows);
    }
})