// Question 1:
// Write a JavaScript for loop that iterates from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
// Input:


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// Question 2:

// Question 2:Write a JavaScript function that takes a string as input and returns the character that appears the most frequently. If multiple characters have the same frequency, return the first one.
// input



// Question 3:
// Create a JavaScript function that takes two arrays as input and returns a new array containing only the elements that are present in both arrays (intersection).
// Input://
//  [1, 2, 3, 4]
// [2, 4, 6, 8]
// Output:
// [2, 4]

// const array1 = [1, 2, 3, 4, ];
// const array2 = [2, 4, 6, 8];
// function intersection(arr1, arr2) {
//     const set = new Set(arr1);
//         return arr2.filter(element => set.has(element));
// }
// console.log(intersection(array1, array2)); 



// Question 4:
// Write a JavaScript program that finds the largest prime factor of a given number.
// Input:13195
// Output:29

// const inputNumber = 13195;
// function largestPrimeFactor(number){
//     let largestPrime = 1;
//     for (let i = 2; i <= number; i++){
//         while (number % i === 0){
//             largestPrime = i;
//             number /= i;
//         }
//     }
//      return largestPrime;
// }
// console.log(largestPrimeFactor(inputNumber));

// Question 5:
// Create a JavaScript function that takes an array of numbers and returns a new array with all the duplicate elements removed.
// Input:
// [1, 2, 2, 3, 4, 4, 5]
// Output:
// [1, 2, 3, 4, 5]

// const inputarray = [1, 2, 2, 3, 4, 4, 5];
// function removeDuplicates(array) {
//     const uniqueSet = new Set(array);
//   const uniqueArray = Array.from(uniqueSet);
//  return uniqueArray;
// }
// console.log(removeDuplicates(inputarray)); 


// Question 6:
// Write a JavaScript function that takes a nested array (an array of arrays) and returns a single flattened array.
// Input:
// [1, [2, [3, [4, 5]]], 6]
// Output:
// [1, 2, 3, 4, 5, 6]

const nestedArray = [1, [2, [3, [4, 5]]], 6];
function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flattenArray(nestedArray)); 

// Question 8:
// Write a JavaScript function that takes a string as input and returns the first non-repeated character. If all characters are repeated, return null.
// Input:
// "swiss"
// Output:
// "w"

// Question 9:
// Create a JavaScript function that takes an array of integers and returns the longest increasing subsequence (not necessarily contiguous).
// Input:
// [10, 9, 2, 5, 3, 7, 101, 18]
// Output:
// 4

// Question 10:
// Write a JavaScript program that solves the "Tower of Hanoi" problem for n disks and prints the steps to move the disks from the source rod to the destination rod using an auxiliary rod.
// Input:
// 3
// Output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C