function rand(num){
    let numArr = [];
    for(i =0; i < num; i++){
        numArr.push(Math.floor(Math.random() * 26) + 1)
    }
    return numArr
}
module.exports = rand;
// console.log(rand(26));

