class Animal {
    constructor(name) {
      this.name = name;
      this.belly = [];
    }

    eat(food) {
      this.belly.push(food);
    }
  }
  //es5寫法---
  function Dog(name,age){
    Animal.call(this,name,age);
    this.name = name;
    this.age = age
  }
  Dog.prototype = new Animal();
  Dog.prototype.consturctor = Dog;
  //---
  class Dog extends Animal {
    constructor(name, age) {
      super(name);
      this.age = age;
    }

    bark() {
      console.log(`Bark bark`);
    }
  }
  const lucky = new Dog("lucky", 2);