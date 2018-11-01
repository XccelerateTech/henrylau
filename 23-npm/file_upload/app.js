const app = require('express')();
const parser = require('body-parser')
const upload = require('express-fileupload')

app.use(parser.urlencoded({extended: false}))
app.use(upload())

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/login', (req, res)=>{
    let image = Buffer.from(req.files.suckMyDick.data, 'binary').toString('base64');
    res.send(`
        <h1>Info Recieved</h1>
        <h2>Your Name : ${req.body.FuckingBeast}</h2>
        <h2>Your Password : ${req.body.littleShit}</h2>
        <h2>Your photo upload : ${req.files.suckMyDick.name}</h2>
        <img src= "data:image/jpg;base64, ${image}">
        `)
    })
app.listen(8080)
