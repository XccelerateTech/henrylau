// node module
const express = require('express');
const app = express();
const fs = require('fs');
const auth = require('express-basic-auth');
const parser = require('body-parser');

// custom module
const memoTaking = require('./memo.js');
const router = require('./router.js');

// view engine
app.set('view engine', 'pug')

// resource handlling
app.use(express.static('public'));
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

// auth
let authFunc = (username, password) =>{
    let USERS = JSON.parse(fs.readFileSync("./json/users.json", 'utf8'))
    return typeof USERS[username] !== 'undefined' && USERS[username] === password;
}
app.use(auth({
    authorizer : authFunc,
    challenge : true
}))

// memo instance
let memo = new memoTaking();

// format Date
const ults = require('./renderData.js')

// landing page 
app.get('/', (req,res)=>{
    memo.list(req.auth.user).then(data=>{ 
        ults.formatDate(data);
        res.render('index',{
            user: req.auth.user,
            content : data
        })
    })
})

// middleware handling
app.use('/api/memo', (new router(memo)).route());

// online
app.listen(8080, ()=>{
    console.log('Service online on port 8080')
})

