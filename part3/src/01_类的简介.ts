class Person {
  name: string = "孙悟空";
  age: number = 18;

  static readonly address = "China";

  sayHello(){
    console.log("Hello")
  }
}

const per = new Person();
console.log(per);
per.sayHello()

