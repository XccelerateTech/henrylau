const char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

function transform(input) {
    if (typeof(input) === "number") {
        let len =  input.toString().split('')
        return word(input, len)
    }else if (typeof(input) === "string"){
        let len =  input.split('')
        return word(input, len)
    }
}
function word(input, output) {
    let temp = [];
    let word = [];
    for (i in output){
        temp[i] = parseInt(input %10)
        input /=10 ;
    }
    temp.sort().map(charIndex =>{word.push(char[charIndex-1])});   
    return word.join('');  
}

console.log(transform("312"));
