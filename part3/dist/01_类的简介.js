"use strict";
class Person {
    constructor() {
        this.name = "孙悟空";
        this.age = 18;
    }
    sayHello() {
        console.log("Hello");
    }
}
Person.address = "China";
const per = new Person();
console.log(per);
per.sayHello();
