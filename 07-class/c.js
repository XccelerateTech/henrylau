function Gambler(name, cash) {
    this.name = name;
    this.cash = cash;
    this.bet = Math.ceil(Math.random() * this.cash);
    this.winOrLose = Math.random();
    this.out = () =>{
        if (this.cash > 0) {
            return false
        }else {
            return true
        }
    }
}

function Casino(gamers) {
    let pot = []
    gamers.map(sum => pot.push(sum.bet))
    let sumPot = pot.reduce((sum, key) => sum + key)
    
    let winner = Math.max(...gamers.map(rate => rate.winOrLose));
    for(i in gamers){
        if(gamers[i].winOrLose === winner){
            gamers[i].cash += sumPot - gamers[i].bet
        }else{
            gamers[i].cash -= gamers[i].bet
        }
    }
    
}
function gameStart(list) {
    if (players.length > 1 ) {
        Casino(list)
        list.filter(zero => zero.out() === true).map(gg => losers.push(gg.name))
        players = list.filter(inGame => inGame.out() === false)
    }
    return console.log(`${players[0].name} win and earn ${players[0].cash}`)
}
let tommy = new Gambler("tommy", 1);
let rick = new Gambler("rick", 1);
let john = new Gambler("john", 1)
let players = []
let losers = []
players.push(tommy, rick, john)
gameStart(players)

