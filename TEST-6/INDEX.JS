
// Valid Parentheses
// ● Problem: Given a string containing just the characters (, ), {, }, [ and ], determine if
// the input string is valid. The input string is valid if:
// ○ Open brackets must be closed by the same type of brackets.
// ○ Open brackets must be closed in the correct order.
// ● Input/Output:
// ○ Input: s = "()"
// Output: true
// ○ Input: s = "([)]"
// Output: false


// 2. Merge Two Sorted Arrays
// ● Problem: Merge two sorted arrays into a single sorted array.
// ● Input/Output:
// ○ Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
// ○ Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]


// 3. Remove Duplicates from Sorted Array
// ● Problem: Remove duplicates in place from a sorted array and return the new length.
// ● Input/Output:
// ○ Input: nums = [1, 1, 2]
// Output: 2, nums = [1, 2]
// ○ Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, nums = [0, 1, 2, 3, 4]

let nums1 = [1, 1, 2];
let length1 = removeDuplicates(nums1);
console.log(length1); // Output: 2
console.log(nums1.slice(0, length1)); // Output: [1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let length2 = removeDuplicates(nums2);
console.log(length2); // Output: 5
console.log(nums2.slice(0, length2)); // Output: [0, 1, 2, 3, 4]

// function findDuplicates(string) {
//   var output = {};
//   console.log(string, "string");
//   for (var i = 0; i <= string.length - 1; i++) {
//     // console.log(string[i]);
//     // console.log(output[string[i]]);

//     // if (string[i] == " ") {
//     //   continue;
//     // }
//     if (string[i] != " ") {
//       if (output[string[i]] == undefined) {
//         output[string[i]] = 1;
//       } else {
//         output[string[i]]++;
//       }
//     }
//   }
//   console.log(output);
// }

// findDuplicates(string);



// 4. Find the Intersection of Two Arrays
// ● Problem: Given two arrays, write a function to compute their intersection.
// ● Input/Output:
// ○ Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2]
// ○ Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [9, 4]


// 5. Maximum Subarray
// ● Problem: Find the contiguous subarray with the maximum sum.
// ● Input/Output:
// ○ Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (subarray: [4, -1, 2, 1])
// ○ Input: nums = [1]
// Output: 1

