function move(input) {
    let charArray = input.toLowerCase().split('');
    let result = [];
    charArray.map(change =>{ result.push(String.fromCharCode(change.charCodeAt() + 10 )) })
    return result.join('')
}
console.log(move('dog'));

