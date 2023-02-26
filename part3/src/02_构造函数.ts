class Dog {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  name: string;
  age: number;

  bark() {
    console.log("汪汪汪!!");
  }
}

const dog = new Dog("旺财", 18);
console.log(dog)