"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        sayHello() {
            console.log("汪汪汪！！");
        }
    }
    const dog = new Dog("旺财", 8);
    dog.sayHello();
})();
