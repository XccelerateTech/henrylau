let sio = io.connect('http://localhost:8080')

let msg = document.getElementById('message')
    handle = document.getElementById('handle')
    btn = document.getElementById('send')
    output = document.getElementById('output')
    feedback = document.getElementById('feedback')

btn.addEventListener('click', function(){
    sio.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('keypress', function(){
    sio.emit('typing', handle.value);
});

sio.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

sio.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});