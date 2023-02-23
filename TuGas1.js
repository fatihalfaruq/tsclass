"use strict";
class person {
    constructor() {
        this.name = "John";
        this.age = 30;
        this.gender = "male";
    }
}
class person1 extends person {
    introduce() {
        console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I identify as ${this.gender}.`);
    }
}
console.log(new person1().introduce());
