let rand = require('./random.js')
let decode = 'abcdefghijklmnopqrstuvwxyz'
let charArr = decode.split('');

function intoChar(nums) {
    let result = [];
    let temp = rand(nums)
    for(i= 0; i < temp.length; i++){
        result.push(charArr[(temp[i] - 1)])
    }
    return result.join('');
}
// console.log(intoChar(4))
module.exports = intoChar;

