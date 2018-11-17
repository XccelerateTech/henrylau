const app = require('express')();
const parser = require('body-parser');

app.use(parser.json());
app.post('/sum', (req, res)=>{
    let result = req.body.reduce((acc, sum)=>{return acc+sum});
    res.json(result)
}).listen(8080)