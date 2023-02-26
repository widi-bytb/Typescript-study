(function () {
  abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // 抽象方法，必须被子类继承，没有方法体
    abstract sayHello(): void;
  }
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
    sayHello(): void {
      console.log("汪汪汪！！");
    }
  }

  const dog = new Dog("旺财", 8);

  dog.sayHello();
})();
