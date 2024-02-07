// let arr = [1, 2, 3, 5, 6, 7, 42, 1];

// function sumission() {
//   let sum = 0;
//   {
//     for (let i = 0; i < this.length; i++) {
//       sum += this[i];
//     }
//     return sum;
//   }
// }

// Array.prototype.sum = sumission;
// console.log(arr.sum());

//++++++++++++++++++++++++++++++++++++++++++++class

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const prompt = require("prompt-sync")();
// const name = prompt('Enter your name: ');
// console.log('Hello, ' + name + '!');

class fourSideShape {
  constructor(side1, side2, side3, side4) {
    // this.side1=
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  permiter() {
    console.log(
      "the permiter for FourSIde Shape is " +
        parseInt(this.side1 + this.side2 + this.side3 + this.side4) 
    );
  }
}

class Triangle extends fourSideShape {
  
  cosnst id=0;
  
  constructor(s1, s2, s3, s4) {
    super(s1, s2, s3, s4);
    let d=id;
    Triangle.id++;
    console.log("This is a triangle  ",Triangle.id);
  }
  print() {
    function stars(s1) {
      let b = 1;
      let a = s1;
      for (a; a > 0; a--) {
        console.log(" ".repeat(a) + "*".repeat(b));
        b++;
      }
    }
    stars(parseInt(this.side1));
  }
  area(){
    console.log("The area of the triangle is :"+(0.5 * this.side1 *this.side2))
  }
}
const t = new Triangle(5, 7, 9, 6);
const t1 = new Triangle(5, 7, 9, 6);
const t2= new Triangle(5, 7, 9, 6);
const t3 = new Triangle(5, 7, 9, 6);
const t4 = new Triangle(5, 7, 9, 6);
// t.permiter();
// t.print();
// t.area();
console.log(t2.d);