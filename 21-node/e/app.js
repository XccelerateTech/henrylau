let time = require('./timer.js')

let timer = new time(12)
timer.on('tick', time =>{
    if(time == 0){
        console.log('kaboom');
    }else{
        console.log(`${time} second left`);
    }
})
timer.emit('start')

setTimeout(() => {
    timer.emit('stop');
}, 9000);
setTimeout(() => {
    timer.emit('start');
}, 5000);
setTimeout(() => {
    timer.emit('pause');
}, 3000)
