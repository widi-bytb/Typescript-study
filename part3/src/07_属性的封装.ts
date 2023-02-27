(function () {
  class Person {
    /* 
        TS可以在属性前添加属性的修饰符
        */
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    get name() {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }

    get age() {
      return this._age;
    }
    set age(value: number) {
      this._age = value;
    }
  }

  //   语法糖
  class Dog {
    constructor(public name: string, public age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const per = new Person("孙悟空", 18);
  const dog = new Dog("旺财", 2);
})();
