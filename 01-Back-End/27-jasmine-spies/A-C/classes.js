class Hero{
    constructor(name, healthPoint, attackPower){
        this.name = name;
        this.health = healthPoint;
        this.damage = attackPower;
    }
    attack(enermy){
        enermy.health -= this.damage;
    }
    isDead(){
        return this.health <= 0
    }
}

class Evil{
    constructor(name, healthPoint, attackPower){
        this.name = name;
        this.health = healthPoint;
        this.damage = attackPower;
    }
    attack(enermy){
        enermy.health -= this.damage;
    }
    isDead(){
        return this.health <= 0
    }
}
function duel(contender, opponent) {
    for(let i = 0;i<4;i++){
        contender.attack(opponent);
        opponent.attack(contender);
    }
    for(let i = 0;i<46;i++){
        contender.attack(opponent);
        opponent.attack(contender);
    }
    if(opponent.isDead()){
        // console.log(`${contender.name} : ${contender.health} HP left`);
        // console.log(`${opponent.name} : ${opponent.health} HP left`);
    }
    setTimeout(()=>{
        opponent.health = 800;
        opponent.damage = 690;
        // console.log(`${contender.name} : ${contender.health} HP left`);
        // console.log(`${opponent.name} : ${opponent.health} HP left`);
    },5000)
}

let p1 = new Hero('AllMight', 8000, 100)
let p2 = new Evil('AllForOne', 5000, 100)
duel(p1, p2)

module.exports = {
    Hero,
    Evil,
    duel
}