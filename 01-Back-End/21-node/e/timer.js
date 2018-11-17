let Emitter = require('events');

class Timer extends Emitter{
    constructor(seconds){
        super();
        this.second = seconds;
        let interval
        this.on('start', ()=>{
            interval = setInterval(todo, 1000)
            let that = this
            function todo(){
                if(that.second == 0){
                    clearInterval(interval)
                }
                that.emit('tick', that.second)
                that.second --
            }
        })
        this.on('pause', ()=>{
            clearInterval(interval)
        })
        this.on('stop', ()=>{
            this.second = 0
            clearInterval(interval)
        })
    }
}
module.exports = Timer

