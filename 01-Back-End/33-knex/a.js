const hey = require('../32-sql_join/noneOfYourBusinese.js');
const csv = require('csv-reader');
const fs = require('fs');
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: 'fruits',
        user: hey.goAway,
        password: hey.leaveMeAlone
    }
});

let csvFile = [];
let operator = {
    'BUY' : '+',
    'SELL' : '-'
}
let inputStream = fs.createReadStream('../32-sql_join/transaction_record.csv', 'utf8');

inputStream.pipe(csv({parseNumbers: true, paresBooleans: true, trim:true}))
.on('data', (row)=>{
    csvFile.push(row)
})
.on('end', data=>{
    csvFile.map(rule =>{
        knex.transaction(safeMode =>{
            return safeMode('citrus_stock')
                .update('quantity',`quantity${operator[rule[0]]}${rule[2]}`)
                .where('name', `'${rule[1]}'`).toSQL();
        })
    })
})