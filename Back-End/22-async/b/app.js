const fs = require('fs');
function copy(input) {
    let readable = fs.createReadStream(__dirname + input, { encoding: 'utf8', highWaterMark: 32 * 1024 });
    
    let writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

    readable.pipe(writeable);
}

copy('/lorem.txt')
