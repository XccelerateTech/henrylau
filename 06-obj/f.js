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
            temp[i] = parseInt(input %10) + 96;
            input /=10 ;
        }
        temp.sort((a,b) => a-b).map(char =>{
            word.push(String.fromCharCode(char))
        });   
        return word.join('');  
}

console.log(transform(312));
