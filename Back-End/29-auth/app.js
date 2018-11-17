const app = require('express')();
const auth = require('express-basic-auth');
const port = 8080;
const USERS = [
    {
        name: "Henry",
        pwd: "123455"
    },
    {
        name: "Jacky",
        pwd: "554321"
    }
]

let authFunc = (username, password) =>{
    return USERS.some(hidden_detail =>{
        return hidden_detail.name == username && hidden_detail.pwd == password
    })
}

app.use(auth({
    authorizer : authFunc,
    challenge : true
}))

app.get('/', (req, res)=>{
    res.status(401)
    res.send('<h1>Welcome back My Lord</h1>')
})
app.listen(port, ()=>{
    console.log(`web online on PORT : ${port}`);
})