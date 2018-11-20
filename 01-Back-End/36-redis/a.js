const redis = require('redis')
const axios = require('axios')
const app = require('express')();

let client = redis.createClient()

client.on('error', err=>{
    console.log('error event - ' + err);
})

function readLatestBlock(limit = undefined){
    let addToQueue = [];
    return new Promise((good, bad)=>{
        axios.get('https://blockchain.info/latestblock').then(res =>{
            res.data.txIndexes.slice(0, limit).map(target =>{
                client.get(target, (err, res)=>{
                    if(err){return bad(err);}
                    if(res === null){
                        addToQueue.push(target);
                    }else{
                        client.expire(target, 3*60 , err=>{
                            if(err){return bad(err);}
                        })
                    }
                    return good(addToQueue)
                })
            })
        }).catch(err =>{
            return bad(err)
        })
    })
}

function extractHASH(input) {
    return new Promise((good, bad)=>{
        input.map(dataIndex=>{
            console.log(`Fetching the transaction detail ${dataIndex}`);
            axios.get(`https://blockchain.info/rawtx/${dataIndex}`).then(hash=>{
                client.setex(dataIndex, 3*60, JSON.stringify(hash.data), err=>{
                    if(err){return bad(err)}
                })
                return good(input)
            })
        })
    })
}


app.get('/lastestBlock', (req, res)=>{
    readLatestBlock(10)
    .then(data => extractHASH(data))
    .then(index => {
        index.map(dataNUM =>{
            client.get(dataNUM, (err, reply)=>{
                console.log(JSON.parse(reply));
            })
        })
    })
    res.send('ok')
})

app.listen(8080, ()=>{
    console.log('Online at localhost:8080.....' );
})
