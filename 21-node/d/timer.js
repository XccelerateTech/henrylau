let Emitter = require('events');

class Timer extends Emitter{
    constructor(seconds){
        super();
        this.second = seconds;
        this.running = true;
        this.count();
        this.output;
    }
    count(){
        let a = setInterval(()=>{
            if (this.second < 1) {
                this.running = false;
            }
            if(this.running){
                this.result = `${this.second} second left`
                this.second--
            }else{
                this.result = 'kaboom'
                clearInterval(a)
            }
            this.emit('tick', this.result);
        }, 1000)
    }
}
module.exports = Timer
