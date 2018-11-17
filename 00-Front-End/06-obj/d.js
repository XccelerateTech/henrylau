function average(result) {
    let total = result.reduce((sum, single) =>{
        return sum + single
    })
    return total / result.length;
}

let b = [0, 1, 2, 3]
average(b)

