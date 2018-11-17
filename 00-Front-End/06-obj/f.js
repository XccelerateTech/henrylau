const char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

function transform(input) {
    if (typeof(input) === "number") {
        let adjust =  input.toString().split('')
        return word(adjust)
    }else if (typeof(input) === "string"){
        let adjust =  input.split('')
        return word(adjust)
    }
}
function word(input) {
    let word = [];
    input.sort().map(charIndex =>{
        word.push(char[parseInt(charIndex - 1)])
    });
    return word.join('');  
}

console.log(transform("312"));
