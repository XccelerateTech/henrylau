function Player(name, health) {
    this.name = name;
    this.health = health;
    this.attack = function(enemy){
        return enemy.health -= 10
    }
    this.death = function () {
        if (this.health > 0) {
            return false
        }else{
            return true
        }
    }
}
Player.prototype.heal = function () {
    return this.health += 3
}

let tommy = new Player("Tommy", 100)
let rick = new Player("Rick", 100)
fight(tommy, rick)

function fight(player1, player2) {
    let hitTrack = [];
    while(!player1.death() && !player2.death()){
        let whoAttack = Math.round(Math.random());
        hitTrack.push(whoAttack);
        if (hitTrack.length > 3) {
            hitTrack.shift();
        }
        // console.log(hitTrack);
        if(hitTrack.length === 3){
           if(hitTrack.every(val => val === 1)){
                player1.heal();
            }else if(hitTrack.every(val => val === 0)){player2.heal() }
        }
        if (whoAttack === 1) {
            player1.attack(player2)
        }else{
            player2.attack(player1)
        }
    }    
    // console.log(player1.health, player2.health)
    if(player1.death()){
        return console.log(`${player1.name} : ${player1.health} - ${player2.name} : ${player2.health} ---> ${player2.name} win!!`)
    }else{
        return console.log(`${player1.name} : ${player1.health} - ${player2.name} : ${player2.health} ---> ${player1.name} win!!`)
    }
}

