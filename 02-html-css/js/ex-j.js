function check(input) {
    if(input <= 0 || NaN){
        return "ERROR"
    }else if(input > 1000000 ){
        return input
    }else{
        return input * 10
    }
}
