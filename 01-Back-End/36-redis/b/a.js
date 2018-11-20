// msg giver
// test on postman
const redis = require('redis')
const app = require('express')()
const parser = require('body-parser')

let client = redis.createClient();

app.use(parser());
app.post('/', (req, res)=>{
    client.lpush('msg', JSON.stringify({
        msg: req.body.msg,
        date: req.body.date
    }), err=>{
        if(err){console.log(err)}
    })
    console.log(req.body.msg)
    res.send(`
        <h1>Message ${req.body.msg} is sent</h1>
    `)
})