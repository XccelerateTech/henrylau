function arrFunc(arr, cb) {
    return arr.map(data =>{
        return cb(data)
    })
}

var arr1 = [4, 8, 2, 7, 5];
let result1 = arrFunc(arr1, function(a) {
    return a * 2;
});
console.log(result1);

var arr2 = [7, 8, 9, 1, 2];
let result2 = arrFunc(arr2, function (a) {
    return a + 5;
})
console.log(result2);
