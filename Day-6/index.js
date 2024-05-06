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