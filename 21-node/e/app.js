let time = require('./timer.js')

let timer = new time(12)

timer.on('tick', time =>{
    console.log(time);
})

setTimeout(() => {
    timer.stop();
}, 9000);
setTimeout(() => {
    timer.start();
}, 5000);
setTimeout(() => {
    timer.pause();
}, 3000)