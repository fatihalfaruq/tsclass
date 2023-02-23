"use strict";
class Animal {
    constructor() {
        this.name = "";
        this.isMammal = true;
    }
}
class Ape extends Animal {
    yell() {
        console.log(`Auooo`);
    }
}
console.log(new Ape().yell());
class Frog extends Animal {
    jump() {
        console.log(`hop hop`);
    }
}
console.log(new Frog().jump());
