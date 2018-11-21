const redis = require('redis')
const axios = require('axios')
const app = require('express')();

let client = redis.createClient()
const {promisify} = require('util')
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const setexAsync = promisify(client.setex).bind(client);
const expireAsync = promisify(client.expire).bind(client);

client.on('error', err => {
    console.log('error event - ' + err);
})

function readLatestBlock(limit = undefined) {
    let fullBlockQueue = [];
    return axios.get('https://blockchain.info/latestblock').then(res=>{
        let DBpromises = res.data.txIndexes.slice(0, limit).map(target => {
            return getAsync(target).then(async reply=>{
                if (reply === null) {
                    // add individual block detail
                    await blockDetail(target)
                    return fullBlockQueue.push(target);
                } else {
                    // extend block detail life-time
                    expireAsync(target, 3 * 60).then(()=>{
                        return fullBlockQueue.push(target)
                    })
                }
            }).catch(err=>console.log(err))
        })
        return Promise.all(DBpromises).then(()=>{
            return setAsync('latestBlock', JSON.stringify(fullBlockQueue)).then(()=>{return extract()})
        })
    }).catch(err=>console.log(err))
}

// fetch individual block detail
function blockDetail(inputIndex) {
    return axios.get(`https://blockchain.info/rawtx/${inputIndex}`).then(hash=>{
        console.log(`Fetching the transaction detail ${inputIndex}`);
        return setexAsync(inputIndex, 3 * 60, JSON.stringify(hash.data))
    }).catch(err=>console.log(err))
}

// output individual block needed detail 
function extract(){
    let hash = []
    return getAsync('latestBlock').then(reply=>{
        let blockArr = JSON.parse(reply)
        let detail = blockArr.map(async index => {
            await getAsync(index).then(reply=>{
                hash.push(JSON.parse(reply).hash)
            })
        })
        return Promise.all(detail).then(()=> {return hash})
    }).catch(err=>console.log(err))
}

app.get('/lastestBlock', (req, res)=>{
    readLatestBlock(55).then(data=>res.json(data))
})

app.listen(8080, ()=>{
    console.log('Online at localhost:8080.....' );
})
