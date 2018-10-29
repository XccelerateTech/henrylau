let time = require('./timer.js')
let timer = new time(15)
timer.on('tick', time =>{
    if(time == 0){
        console.log('kaboom');
    }else{
        console.log(`${time} second left`);
        
    }
})