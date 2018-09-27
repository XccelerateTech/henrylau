const letter = [
    "o","b","l","i","e","t","a","d","n","m"
]

function matching(input) {
    if(typeof(input) === "string"){
        let temp = [];
        input.split('').map(num =>{
            temp.push(letter[num]);
        })
        return temp.join('') 
    }else if(typeof(input) == "number"){
        let temp = [];        
        input.toString().split('').map(digit =>{
            temp.push(letter[digit.charAt()])
        })
        return temp.join('')
        
    }
}

