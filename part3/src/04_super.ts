(function () {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log("动物在叫~");
    }
  }
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
    sayHello(): void {
      console.log("汪汪汪！！");
    }
  }

 const dog = new Dog("旺财",8)

 dog.sayHello()
})();
