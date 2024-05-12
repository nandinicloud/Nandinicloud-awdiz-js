var array = [1, 2, 3, 4, 5];
var target = 6;
// 1 + 4 =  5
// 2 +3  = 5
// 1 4
// 2 3
function FindTarget(array, target) {
  for (var i = 0; i < array.length - 1; i++) {
    //   console.log(array[i], "i");
    for (var j = i + 1; j < array.length; j++) {
      // console.log(array[j], "j");
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j]);
      }
      // j++
    }
    //   i++
  }
}
FindTarget(array, target);

// 1 + 2 = 3 , 1 + 3 = 4, 1 + 4 = 5 , 1 + 5 = 6

// 2 + 3 = 5, 2 + 4 = 6, 2 + 5 = 7

// 3 + 4 = 7, 3 + 5 = 8

// 4 +5  = 9

var array = [5, 6, 7, 8, 9, 4, 5, 7, 6, 3, 8, 2, 4, 5, 9];

var target = 10;
