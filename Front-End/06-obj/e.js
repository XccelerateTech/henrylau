function uefaEuro2016(teams, score) {
    let winIndex = score.indexOf(Math.max(...score));
    let loseIndex = score.indexOf(Math.min(...score));
    
    if(score[winIndex] > score[loseIndex]){
        // return "At match "+teams[0]+" - "+teams[1]+", "+teams[winIndex]+" won!"
        return `At match  ${teams[0]} - ${teams[1]}, ${teams[winIndex]} won!`
    }else{
        return `At match  ${teams[0]} - ${teams[1]}, teams played draw`
    }
}

let one = uefaEuro2016(['Germany', 'Ukraine'],[2, 0])
let two = uefaEuro2016(['Belgium', 'Italy'],[0, 2])
let three = uefaEuro2016(['Portugal', 'Iceland'],[1, 1])

console.log(one, two, three);


