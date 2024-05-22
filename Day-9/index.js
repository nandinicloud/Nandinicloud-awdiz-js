var array = [1, 2, 3, 4, 5, 6];
var target = 25;
var count = 0;
for (var i = 0; i < array.length; i++) {
  // 0 - 5 = 6
  
  for (var j = i + 1; j < array.length; j++) {
    //0 - 5 = 6
    console.log("target");
    console.log(array[i], "+", array[j], "=", array[i] + array[j]);

    // put conditional statement here
  }
  // i++
}
console.log(count)





// (explaination)

// 1 st iteration :
// i = 0;
// i < array.length ; 0 < 6 ; true

// j += 1; j = 1
// j < array.length ; 1 < 6 ; true
// console.log("Inner for loop.");
// j =2
// j < array.length ; 2 < 6 ; true
// console.log("Inner for loop.");
// j =5
// j < array.length ; 5 < 6 ; true
// console.log("Inner for loop.");
// j++
// j = 6
// j < array.length ; 6 < 6 : false

// 2nd iteration

// i = 1;

// i < array.length ; 1 < 6 : true

// j=>
// j = i + 1
// j = 1 + 1 = 2

// j < array.length ; 2 < 6 : true
// console.log("Inside inner function")

// j = 3

// j < array.length ; 3 < 6 : true
// console.log("Inside inner function")

// j = 4

// j < array.length ; 4 < 6 : true
// console.log("Inside inner function")

// j = 5

// j < array.length ; 5 < 6 : true
// console.log("Inside inner function")

// j = 6

// j < array.length ; 6 < 6 : false

// 3 rd iteration

// i = 2 ;

// // target = 5

// // 1 + 2 = 3 , 1 + 3 = 4, 1 + 4 = 5, 1 + 5 = 6, 1 +6 = 7
// // 2 + 3 = 5, 2 + 4 = 6, 2 + 5 = 7, 2 + 6 = 8
// // 3 + 4 = 7, 3 + 5 = 8 , 3 + 6 = 9
// // 4 + 5 = 9, 4 + 6 = 10
// // 5 + 6 =11