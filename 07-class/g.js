class canFly {
    fly(){
        console.log(`${this.animal} can fly`)
    }
}
class canSwim {
    swim(){
        console.log(`${this.animal} can swim`);
        
    }
}

class Bat extends canFly {
    constructor(){
        super();
        this.animal = "Bat";
    }
    feed(){
        console.log(`${this.animal} is feeding milk`);
    }
}

class Fish extends canSwim {
    constructor(){
        super();
        this.animal = "Fish";
    }
    reproduce(){
        console.log(`${this.animal} lays eggs`);
    }
}

class Whale extends canSwim{
    constructor(){
        super();
        this.animal = "Whale";
    }
    feed(){
        console.log(`${this.animal} is feeding milk`);
    }
}

class Bird extends canFly{
    constructor(){
        super();
        this.animal = "Bird";
    }
    reproduce(){
        console.log(`${this.animal} lays eggs`);
    }
}

var bat = new Bat();
bat.fly();
bat.feed();

var bird = new Bird();
bird.fly();
bird.reproduce();

var fish = new Fish();
fish.swim();
fish.reproduce();

var whale = new Whale();
whale.swim();
whale.feed();