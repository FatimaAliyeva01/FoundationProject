let arr = [1,5,9,'New York', true, 'javascript',7, ['false','exit']];
let lastElement = arr[arr.length-1]; // last element find
console.log(lastElement); //last element result ['false','exit']
console.log(arr.length);// length
let firstElement = arr[arr.length - 8]; // firts element find
console.log(firstElement); // first elemnt result:1
let eightElement = arr[arr.length-1]; // eight element find
console.log(eightElement); // eight element result ['false','exit']
arr.push('London'); //Add new element 'London' to the ennd    
console.log(arr); // Result  [1, 5, 9, "New York", true, "javascript", 7, Array(2), "false", "exit", "London"] 
arr.pop();
console.log(arr); // [1, 5, 9, "New York", true, "javascript", 7, Array(2), "false", "exit"] 

let removed = arr.splice( 1,0, 'Moscow, Ankara'); //  Add after second element 'Moscow','Ankara' using method 'splice'
console.log(arr); //  [1, "Moscow, Ankara", 5, 9, "New York", true, "javascript", 7, Array(2), "false", "exit"]

let removed1 = arr.splice( 2, 0,'BMW','AUDI'); // Add after second element 'Audi','BMW' and remove next element using method 'splice'
console.log(arr); // [1, "Moscow, Ankara", "BMW", "AUDI", 5, 9, "New York", true, "javascript", 7, Array(2), "false", "exit"]

let arr1 = [36,5,89,7,2,1];
console.log(arr1); // Result [36,5,89,7,2,1]
arr1.sort(); // Sorting array element using correct form of method sort()
console.log(arr1); // Result [1,2,5,7,36,89]

let str = "Alma, Armud, Heyva, Nar, Mandarin";
console.log(str.slice(12,18));
console.log(str.slice(-13));



function randomeded (x,y){
    return Math.floor(Math.random()* (x-y) + y)
};
console.log(randomeded(20,36));

