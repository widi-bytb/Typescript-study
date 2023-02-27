"use strict";
(function () {
    /*
       在定义函数或类时，如果遇到类型不明确就可以使用泛型
      */
    function fn(a) {
        return a;
    }
    //   可以直接调用具有泛型的函数
    fn(10); //不指定泛型，TS可以自动对类型进行推断
    fn("hello"); //指定泛型
    // T extends Inter 表示泛型T必须是Inter实现类（子类）
    function fn3(a) {
        return a.length;
    }
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    const mc = new MyClass("孙悟空");
})();
