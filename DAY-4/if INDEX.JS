// Conditional Statement
// 1. if else
// 2. switch

// if else

// syntax
// if(condition){
//     statement 1
// } else {
//     statement 2
// }

var age = 10;
console.log(age > 18);

if (age > 18) {
  console.log("Your age is valid for Driving License.");
} else if (age == 18) {
  console.log("you are allowed for LL.");
} else if (age == 10) {
  console.log("Your age is 10.");
} else {
  console.log("Your age is Not valid for Driving License.");
}

// Comparision Operator
// =   -> to assign value to varible
// ==  -> to compare only data
// === -> to compare with data and datatype


var num1 = 10;
var num2 = 10;
console.log(num1 == num2);

var num1 = 10;
var num2 = '10';
console.log(num1 == num2);
console.log(num1 === num2);

console.log(20 > 30);
console.log(20 < 30);
console.log(30 <= 30);
console.log(30 >= 30);
console.log(30 != 30);
