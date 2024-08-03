// AWDIZ 30 A MWF
// Vinay
// Adep  -> Leader
// Rahul
// Pruva
// nilesh
// Ali
// Nehal
// Swaraj

// AWDIZ 30  B MWF
// zaid
// praful
// dhaval
// Nandini -> Leader
// Anaida
// Amod
// Swaraj

// Evening 9 - 10
// screenshot

// Assignemnt
// Dsa
// Interview question

// Datatype
// String
// number
// boolean
// undefined
// varible
// var
// let
// const
// Hoisting
// Comparision operators
// < > <= >= == ===
// Conditional Statement
// if else
// switch
// logical operators
// && ||
// function
// traditional function -> function functionName() {}
// arrow function
// Template literals
// Array -> to store multiple data
// Object -> to store multiple data

// const myArray = [1, 2, 3, 4];

// const myObject = { key: value, key2: value2 };

// const studentData = {
//     name: "Nandini",
//     age: 20,
//     isCompletedTest: true,
//     allTestMarks: [90, 91, 92, 30, 50],
//     attendance: { yeterday: "present", today: "present", tommoywo: "absent" },
//   };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   const myObject = {
//     name: "Nandini",
//     age: 20,
//     allTestMarks: [90, 91, 92, 30, 50, "Hii"],
  
//   };
  
//   myObject.surname = "Abc";
//   console.log(myObject['name'])
//   myObject['location'] = "mumbai"
//   console.log(myObject);
  
//   console.log(myObject);
//   console.log(myObject.age);
//   console.log(myObject.name);
//   console.log(myObject.allTestMarks)
//   console.log(myObject.allTestMarks[myObject.allTestMarks.length - 1])
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   const student = new Object();
//   student.name = "Dhaval";
//   student.surname = "abc";
//   student['age'] = 20;
//   console.log(student);
  
  
  
  
  
  
  
  
  
  
  
  
//   const myObject = {
//     name: "nandini",
//     age: 20,
//     surname: "abc",
//   };
  
//   for (let key in myObject) {
//     console.log(key , myObject[key]);
//   }
  
//   console.log(Object.keys(myObject));
//   console.log(Object.values(myObject));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Q Given an string find out numbers of repetation for single letter.
  
  // v : 1
  // i : 1
  // n : 1
  // a : 2
  // y : 1
//   var string = "nayan";
  
//   function findDuplicates(string) {
//     var output = {};
//     console.log(string, "string");
//     for (var i = 0; i <= string.length - 1; i++) {
    
//       if (output[string[i]] == undefined) {
//         output[string[i]] = 1;
//       } else {
//         output[string[i]]++;
//       }
//     }
//     console.log(output);
//   }
  
//   findDuplicates(string);



  
  
  
  
//   // Q Given an string find out numbers of repetation for single letter and return a letter which having most of reperation .
  
  
//   var string = "nayan"

    
var string = "nandini";

function repetedletter(str) {
    var frequency = {};
    var maxCount = 0;
    var mostFrequentLetter = '';

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
                if (frequency[char] === undefined) {
            frequency[char] = 1;
        } else {
            frequency[char]++;
        }
    }
    console.log("lettercounts:", frequency);

    for (var char in frequency) {
        if (frequency[char] > maxCount) {
            maxCount = frequency[char];
            mostFrequentLetter = char;
        }
    }

    return mostFrequentLetter;
}

console.log("Letter with most repetitions is :", repetedletter(string));
