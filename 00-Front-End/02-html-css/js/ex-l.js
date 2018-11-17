function countChar(input, compare) {
    let find = 0;
    for(let i = 0; i<input.length; i++){        
        if(input.toLowerCase()[i] == compare.toLowerCase()){
            find += 1;
        }
    }
    return find
}



