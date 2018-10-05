class Monster {
    constructor(name){
        this.name = name;
        this.health = 100;
    }
    wound(damage){
        this.health -= damage;
        if (this.health < 0 ) {
            console.log('Monster is dead!');
        }
    }
}
function hero(hunting) {
    attack = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    hunting.wound(attack);
}
var monster = new Monster("the great")
while(monster.health > 0){
    hero(monster)
}