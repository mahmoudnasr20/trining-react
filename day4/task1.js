/*let arr=[1,3,-6,2,10];
function sum_arr(arr){
  let sum=0;
for(let a of arr){
  sum+=a;
} 
return sum;
}


console.log(sum_arr(arr));
*/



op = {
	array1: [5, 9, 10, -1, -15],
	array2: [4, 5, 2, -20],
	array3: [5, 9, -10, -15, 29],
};

function sum_object(op){
let sum=0,s=0;
  for( let x in op){
    for(let y of op[x]) {
    sum +=y;
    }
    s+=sum;
  }
  console.log("sum is  : "+s);
}
sum_object(op)