function reverse(input) {
    if (typeof(input) === "number") {
        let temp =[]
        input.toString().split('').reverse().map(nums =>{temp.push(Number(nums))});
        return temp
    }else{
        return "Invalid Input"
    }
}
console.log(reverse(12345));



