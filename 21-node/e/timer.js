let Emitter = require('events');

class Timer extends Emitter{
    constructor(seconds){
        super();
        this.second = seconds;
        this.running = true;
        this.count();
    }
    count(){
        this.interval = setInterval(()=>{
            if (this.second < 1) {
                this.running = false;
            }
            if(this.running){
                this.result = `${this.second} second left`
                this.second--
            }else{
                this.result = 'kaboom'
                clearInterval(this.interval)
            }
            this.emit('tick', this.result);
        }, 1000)
    }
    stop(){
        this.second = 0
        clearInterval(this.interval)
    }
    pause(){
        clearInterval(this.interval)
    }
    start(){
        this.count();
    }
}
module.exports = Timer

