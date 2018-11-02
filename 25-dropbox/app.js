const app = require('express')();
const parser = require('body-parser')
const upload = require('express-fileupload')
const fs = require('fs')
const toPromise = require('util');
let readFile = toPromise.promisify(fs.readFile)

app.use(parser.urlencoded({ extended: false }))
app.use(upload())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/files/:name', (req, res) => {
    readFile(`${__dirname}/files/${req.params.name}`, (err, data) => {
        if (err) throw err;
    }).then(file => { res.send(file) })
})
app.post('/files', (req, res) => {
    req.files.suckMyDick.mv(`./files/${req.files.suckMyDick.name}`)
    res.send(`
        <h1>Info Recieved</h1>
        <h2>Your file upload : ${req.files.suckMyDick.name}</h2>
    `)
})
app.listen(8080)

