"use strict";
class Animal {
    constructor(name, age, isMammal) {
        this.name = "";
        this.age = 0;
        this.isMammal = true;
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
class Rabbit extends Animal {
    eat() {
        console.log(`${this.name} sedang makan ${this.isMammal}`);
    }
}
const myrabbit = new Rabbit("Labi", 2, true);
myrabbit.eat();
class Eagle extends Animal {
    fly() {
        console.log(`${this.name} sedang terbang ${this.isMammal}`);
    }
}
const myEagle = new Eagle("Elo", 4, false);
myEagle.fly();
