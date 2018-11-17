const result = [];

for (let i = 1; i < 31; i++) {
    let temp;
    if(i % 15 == 0){
        temp = "Hong Kong"
    }else if(i%3 == 0){
        temp = "Hong"
    }else if(i%5 == 0){
        temp = "Kong"
    }else{
        temp = i
    }
    result.push(temp)
    
}
console.log(result);
