//frist task
//=============================
 function stars(a) {
  let b = 1;
  for (a; a > 0; a--) {
    console.log(" ".repeat(a) + "*".repeat(b));
    b++;
  }
}
//stars(10);

//secend task
//=============================

function Roun4Num() {
  let a, b, c, d, s;
  a = Math.floor(Math.random() * 30);
  b = Math.floor(Math.random() * 30);
  c = Math.floor(Math.random() * 30);
  d = 100 - (a + b + c);
  s = a + b + c + d;

  console.log("a = " + a + "  b = " + b + "  c = " + c + "  d = " + d);
  console.log("sum of thim is equal to " + s);
}
//Roun4Num();
//*********************************************** */
//write program that can make computer guess 4 numbers that the  sum of these 4 number is equal top 100(use onle 3 for loop)

function Random4Num(num, sum) {
  let arr = [];
  for (let i = 0; i < num - 1; i++) {
    arr[i] = Math.floor(Math.random() * (sum / num));
  }
  let s = 0;
  for (let i = 0; i < num - 1; i++) {
    s += arr[i];
  }
  arr[num - 1] = sum - s;
  for (let i = 0; i < num; i++) {
    console.log(arr[i]);
  }
}
//Random4Num(4,100);



function stars(a) {
  let b ;
  for (a; a > 0; a--) {
    let str=""
  for( b=1;b<a;b++){
    str+="*";
  }

    console.log(" ".repeat(a) + "*".repeat(b));
    b++;
  }
}
//stars(10);


let arr=[1,2,3,4,5,6];
for(let i of arr){
  console.log(i);
}
for(let e in arr){
  console.log(e);

}
 