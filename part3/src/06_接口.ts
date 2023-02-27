(function () {
  //   描述一个对象额类型
  type myType = {
    name: string;
    age: number;
  };

  /* 
  接口用来定义一个类结构,用来定义一个类中应该包含哪些属性和方法
     同时接口也可以当成类型声明去使用
  
  */
  interface myInterface {
    name: string;
    age: number;
  }
  interface myInterface {
    gender: string;
  }
  const obj: myInterface = {
    name: "孙悟空",
    age: 18,
    gender: "男",
  };

  interface myInter {
    name: string;
    sayHello(): void;
  }
  class MyClass implements myInter {
    name: string;
    constructor(name:string) {
      this.name = name;
    }
    sayHello(): void {
      console.log("大家好");
    }
  }
})();
