let Emitter = require('events');

class Timer extends Emitter{
    constructor(seconds){
        super();
        this.second = seconds;
        this.count();
    }
    count(){
        let interval = setInterval(todo, 1000)
        let that = this
        function todo(){
            if(that.second == 0){
                clearInterval(interval)
            }
            that.emit('tick', that.second)
            that.second --
        }
    }
}
module.exports = Timer
