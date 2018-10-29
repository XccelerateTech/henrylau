let time = require('./timer.js')

let timer = new time(25)

timer.on('tick', time =>{
    console.log(time);
})