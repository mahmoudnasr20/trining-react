class Shape {
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }
  area() {
    console.log("area of shape is : ", Number(this.height * this.width));
  }
  permeiter() {
    console.log(
      "permeiter of shape is : ",
      Number(this.height + this.width + this.height + this.width)
    );
  }
}

class Rectangel extends Shape {
  constructor(height, wight) {
    super(height, wight);
    this.height = height;
    this.wight = wight;
  }
  print_rectangel() {
    for (let i = 0; i < this.height; i++) {
      console.log(" *".repeat(this.wight));
    }
  }
}

class Square extends Rectangel {
  constructor(h) {
    super(h, h);
    this.h = h;
  }
  print_square() {
    for (let i = 0; i < this.h; i++) {
      console.log(" *".repeat(this.h));
    }
  }
}
var r = new Rectangel(5, 10);
r.print_rectangel();
console.log("Area: " + r.area());
console.log("Permeiter: " + r.permeiter());

var s = new Square(6);
var e=new Square(4)
s.print_square();
console.log("Area: " + s.area());
console.log("Permeiter: " + s.permeiter());
/*
هعمل كلاس اسمها sheape 
فيها كونستراكتور هياخد طول وعرض
هعمل فيه فانكشن تطبع  المساحه عباره عن الطول ف العرض
هعمل فانكشن تانيه تطبع المحيط هيساوي مجموع الاضلاع لشكل


rectangeleهعمل كلاس اسمها 
هتورث من كلاس  shape
هيكون فيها كونستراكتور هياخد الطول والعرض  بداخل 
هبعت الطول والعرض لكلاس (shape) using super(h,w)
هعمل فانكشن تطبع شكل المستطيل
هتاخد الطول والعرض  بداخلها لوب هتلف من 0 للطول
وبعدين هطبع الشكل مكرر عدد وحدات العرض




هعمل كلاس square extendes from shape 
هيكون في كونستركتور هياخد الطول وهيتبعت للمستطيل عن طريق السوبر 
هيكون الطول والعرض متساوي
 هعمل فانكشن تطبع الشكل بداخلها لوب هتلف من  0 ل الطول 
 هطبع الشكل اللي هيكون المربع مضروب في الطول
 


*/
