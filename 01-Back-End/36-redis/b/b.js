// msg reciever
const redis = require('redis')

const client = redis.createClient();
function msgSeeking(){
    setTimeout(() => {
        msgPopup
    }, 5000);
}

function msgPopup() {
    client.rpop('msg', (err, reply)=>{
        if(err){console.log(err)}
        if(reply === null){
            msgSeeking();
            return;
        }else{
            const msg = JSON.parse(reply);
            console.log(`Message recieved : ${msg.msg} - from ${msg.date}`);
            return;
        }
    })
}

msgPopup();