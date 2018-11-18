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
    'BUY'  : '+',
    'SELL' : '-'
}
let inputStream = fs.createReadStream('../32-sql_join/transaction_record.csv', 'utf8');

inputStream.pipe(csv({parseNumbers: true, paresBooleans: true, trim:true}))
.on('data', (row)=>{
    csvFile.push(row)
})
.on('end', data=>{
    csvFile.map(rule =>{
        knex.transaction(trx =>{
            return knex('stock').transacting(trx)
                // .update('quantity', `quantity${operator[rule[0]]}${rule[2]}`)
                .update({
                    quantity : knex.raw(`quantity${operator[rule[0]]}${rule[2]}`)
                })
                // .innerJoin('citrus')
                // .andWhere('name', `${rule[1]}`)
                // .andWhere('stock.citrus_id', 'citrus.id')
                .whereIn('citrus_id', function (){
                    return this.select('id').from('citrus').where('name', `${rule[1]}`)
                })
        }).then(() =>{
            console.log('Transaction Complete');
        })
    })
})