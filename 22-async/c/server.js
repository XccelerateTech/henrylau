const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    let path = req.url === '/' ? '/flowerShop.html' : req.url;
    if (req.url) {
        fs.createReadStream(__dirname + '/web' + path).pipe(res);
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(8080, () => {
    console.log('The web online');
})