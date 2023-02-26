(function () {
  class Animal {
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    name: string;
    age: number;
    sayHello(): void {}
  }

  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
    sayHello() {
      console.log("汪汪汪！！");
    }
  }

  class Cat extends Animal {
    sayHello() {
      console.log("喵喵喵！！");
    }
  }

  const dog = new Dog("旺财",18);
  const cat = new Cat("汤姆",8);
  dog.sayHello()
  console.log(dog,cat);
})();
