"use strict";
(function () {
    const obj = {
        name: "孙悟空",
        age: 18,
        gender: "男",
    };
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("大家好");
        }
    }
})();
