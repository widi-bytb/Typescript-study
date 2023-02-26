"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log("汪汪汪!!");
    }
}
const dog = new Dog("旺财", 18);
console.log(dog);
