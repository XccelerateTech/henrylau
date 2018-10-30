const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/web/flowerShop.html').pipe(res);
    }else if(req.url){
        fs.createReadStream(__dirname+'/web'+req.url).pipe(res)
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(8080, () => {
    console.log('The web online');
})