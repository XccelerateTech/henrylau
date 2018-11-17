class BaseFlying {
    constructor(animal) {
        this.animal = animal;
    }
    fly() {
        console.log(`${this.animal} can fly.`);
    }
}
class BaseSwimming {
    constructor(animal) {
        this.animal = animal;
    }
    swim() {
        console.log(`${this.animal} can swim.`);
    }
}
class BaseLaying {
    constructor(animal) {
        this.animal = animal;
    }
    lay() {
        console.log(`${this.animal} is lays eggs.`);
    }
}
class BaseFeeding {
    constructor(animal) {
        this.animal = animal;
    }
    feed() {
        console.log(`${this.animal} is feeding milk.`);
    }
}
class Bat {
    constructor() {
        this.batFly = new BaseFlying('Bat');
        this.batFeed = new BaseFeeding('Bat');
    }
}
class Fish {
    constructor() {
        this.fishSwim = new BaseSwimming('Fish');
        this.fishReproduce = new BaseLaying('Fish');
    }
}
class Whale {
    constructor() {
        this.whaleSwimm = new BaseSwimming('Whale');
        this.whaleFeed = new BaseFeeding('Whale');
    }
}
class Bird {
    constructor() {
        this.birdFly = new BaseFlying('Bird');
        this.birdReproduce = new BaseLaying('Bird');
    }
}

var bat = new Bat();
bat.batFly.fly();
bat.batFeed.feed();

var fish = new Fish();
fish.fishSwim.swim();
fish.fishReproduce.lay();


var whale = new Whale();
whale.whaleSwimm.swim();
whale.whaleFeed.feed();

var bird = new Bird();
bird.birdFly.fly();
bird.birdReproduce.lay();