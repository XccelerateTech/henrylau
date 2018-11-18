const pg = require('pg');
const fs = require('fs')
const hey = require('./noneOfYourBusinese.js');
const csv = require('csv-reader')

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

function begin(done) {
    client.query('begin', err=>{
        if(err){
            console.log(err);
        }
        done()
    })
}

function commit(done) {
    client.query('commit', err=>{
        if(err){
            console.log(err);
        }
        done()
    })
}

function rollback(done) {
    client.query('rollback', err=>{
        if(err){
            console.log(err);
        }
        done()
    })
}
let csvFile = [];
let operator = {
    'BUY' : '+',
    'SELL' : '-'
}
let inputStream = fs.createReadStream('./transaction_record.csv', 'utf8');

inputStream.pipe(csv({parseNumbers: true, paresBooleans: true, trim:true}))
.on('data', (row)=>{
    csvFile.push(row)
})
.on('end', data=>{
    console.log('End of file');
    // console.log(operator[csvFile[0][0]]);
    csvFile.map(rule =>{
        // let join = `SELECT quantity FROM stock INNER JOIN citrus ON stock.citrus_id\=citrus.id`
        // let command = `UPDATE stock SET quantity\=quantity${operator[rule[0]]}${rule[2]} FROM citrus WHERE stock.citrus_id\=citrus.id AND name\='${rule[1]}'`
        let mixCommand = `UPDATE stock st SET quantity\=quantity${operator[rule[0]]}${rule[2]} FROM citrus ct WHERE st.citrus_id\=ct.id AND ct.name\='${rule[1]}'`
        begin(()=>{
            client.query(mixCommand, (err, result)=>{
                if(err){
                    rollback(()=>{
                        console.log('Transaction is rolled back! '+err);
                    })
                }else{
                    commit(()=>{
                        console.log('Transaction is committed');
                    })
                }
            })
        })
    })
})
