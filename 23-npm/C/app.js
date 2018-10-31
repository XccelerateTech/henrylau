const app = require('express')();
const parser = require('body-parser');

app.use(parser.urlencoded({extended: false}));
app.post('/user', (req, res)=>{
    console.log(req.body);
    res.send("Information Received.");
})
app.listen(8080)