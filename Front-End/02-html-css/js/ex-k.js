const letter = [
    "o","b","l","i","e","t","a","d","n","m"
]

function matching(input) {
    if(typeof(input) === "string"){
        let temp = [];
        input.split('').map(num =>{
            temp.push(letter[num]);
        })
        return check(temp)
        
    }else if(typeof(input) == "number"){
        let temp = [];        
        input.toString().split('').map(digit =>{
            temp.push(letter[digit.charAt()])
        })
        return check(temp)
        
    }else{
        return "Invalid Input"
    }
}

function check(checkOutput){
    if (checkOutput.length > 2 && checkOutput.length < 7) {
        return checkOutput.join('')
    }else{
        return "Invalid Input -- Length"
    }
}
