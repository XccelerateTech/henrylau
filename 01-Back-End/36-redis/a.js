const redis = require('redis')
const axios = require('axios')
const app = require('express')();

let client = redis.createClient()

client.on('error', err => {
    console.log('error event - ' + err);
})

async function readLatestBlock(limit = undefined) {
    let fullBlockQueue = [];
    let res = await axios.get('https://blockchain.info/latestblock')
    res.data.txIndexes.slice(0, limit).map(target => {
        client.get(target, async(err, res) => {
            if (err) { console.log(err) }
            if (res === null) {
                fullBlockQueue.push(target);
                await blockDetail(target)
            } else {
                fullBlockQueue.push(target)
                client.expire(target, 3 * 60, err => {
                    if (err) { console.log(err) }
                })
            }
            client.set('latestBlock', JSON.stringify(fullBlockQueue), err => {
                if (err) { console.log(err) }
            })
        })
    })
    
}

async function blockDetail(inputIndex) {
    let hash = await axios.get(`https://blockchain.info/rawtx/${inputIndex}`)
    console.log(`Fetching the transaction detail ${inputIndex}`);
    client.setex(inputIndex, 3 * 60, JSON.stringify(hash.data), err => {
        if (err) { console.log(err) }
    })
}

app.get('/lastestBlock', (req, res)=>{
    readLatestBlock(5)
    setTimeout(() => {
        let hash = []
        client.get('latestBlock', (err, reply) => {
            if (err) { console.log(err) }
            let blockArr = JSON.parse(reply)
            blockArr.map(index => {
                client.get(index, (err, reply) => {
                    if (err) { console.log(err) }
                    let a = JSON.parse(reply).hash;
                    hash.push(a)
                })
            })
            res.json(hash)
        })
    }, 5000);
})

app.listen(8080, ()=>{
    console.log('Online at localhost:8080.....' );
})
