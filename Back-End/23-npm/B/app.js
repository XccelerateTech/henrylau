const express = require('express');
const app = express();

app.use(express.static(__dirname+'/web'))
app.listen(8080);