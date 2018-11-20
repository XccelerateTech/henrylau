const redis = require('redis')
const axios = require('axios')
const app = require('express')();
const {promisify} = require('util');

let client = redis.createClient()

client.on('error', err=>{
    console.log('error event - ' + err);
})

function readLatestBlock(limit = undefined){
    let updatedBlockQueue = [];
    return new Promise((good, bad)=>{
        axios.get('https://blockchain.info/latestblock').then(res =>{
            res.data.txIndexes.slice(0, limit).map(target =>{
                client.get(target, (err, res)=>{
                    if(err){return bad(err);}
                    if(res === null){
                        updatedBlockQueue.push(target);
                    }else{
                        updatedBlockQueue.push(target)
                        client.expire(target, 3*60, err=>{
                            if(err){console.log(err)}
                        })
                    }
                    client.set('latestBlock', JSON.stringify(updatedBlockQueue), err=>{
                        if(err){console.log(err)}
                    })
                })
            })
            return good()
        }).catch(err =>{
            return bad(err)
        })
    })
}

function blockDetail() {
    return new Promise((good, bad)=>{
        client.get('latestBlock', (err, res)=>{
            if(err){console.log(err)}
            JSON.parse(res).map(dataIndex=>{
                console.log(`Fetching the transaction detail ${dataIndex}`);
                axios.get(`https://blockchain.info/rawtx/${dataIndex}`).then(hash=>{
                    client.setex(dataIndex, 3*60, JSON.stringify(hash.data), err=>{
                        if(err){return bad(err)}
                    })
                })
            })
            return good(JSON.parse(res))
        })
    })
}

app.get('/lastestBlock', (req, res)=>{
    readLatestBlock(20)
    .then(() => blockDetail())
    .then(index => {
        let output = []
        index.map(indexDetail=>{
            client.get(indexDetail, (err, reply)=>{
                if(err){console.log(err)}
                output.push(JSON.parse(reply).hash);
            })
        })
        setTimeout(()=>{res.json(output)},500)
    })
})

app.listen(8080, ()=>{
    console.log('Online at localhost:8080.....' );
})
