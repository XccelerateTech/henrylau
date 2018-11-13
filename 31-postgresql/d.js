const pg = require('pg');
const hey = require('./noneOfYourBusinese.js');

let config ={
    user: hey.goAway,
    database: 'fruits',
    password: hey.leaveMeAlone,
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