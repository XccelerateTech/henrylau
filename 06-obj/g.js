function middle(input) {
    let max = Math.max(...input)
    let min = Math.min(...input)    
    let middle = input.filter(inside => inside < max && inside > min)
    // console.log(typeof middle)
    return `${middle} at index ${input.indexOf(middle[0])} lies between ${min} and ${max}`
}

console.log(middle([99,21,45]));
