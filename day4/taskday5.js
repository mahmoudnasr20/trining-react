// Fabbionacci using  recursion
function fibona(n) {
  let arr = [];
  for (let x = 0; x < n; x++) {
    arr[x] = fibonacci(x);
  }
  function fibonacci(n) {
    let arr1 = [];
    console.log(arr);

    if (n === 0) return 0;
    else if (n === 1) return 1;
    else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  console.log("Fibonacci series: ", arr);
}
fibona(8);

// fanionacci using for loop

function Fabbionacci(a) {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < a; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr);
}
// Fabbionacci(10);

//bubble sort using for

function Bubble_sort(arr) {
  let l = arr.length;
  for (var i = 0; i < l; i++) {
    for (var j = l; j >= i; j--) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
}

// Bubble_sort(arr);

//Bubble sort using reice
