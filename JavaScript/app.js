// HomeWork- week 05/days 04
//Sort elements of an array from larger to smaller

let arr= [2,6,32,95,44,62,94];
arr.sort();
arr.sort(function(x,y){
    return x-y
});

console.log( arr);
//Show in console all elements which are divided into 3 without remainder let arr= [2,6,32,95,44,62,94];
for(let i = 0;i<arr.length;i++){
    if(arr[i]%3){
       console.log(arr[i],'qaliqla')
    }else if(arr[i]/3){
        console.log(arr[i],"qaliqsiz")
    }
};

console.log(arr);


//Remove first element of an array (splice) Remove first element and add two other ('PHP','Python') (splice)
let arr1 = ["I", "learn", "JavaScript"];
arr1.splice(0,1,'PHP','Python');
console.log(arr1);
// Show in console all element which are less than 50


// Show in console all elements which are greater than 35 and less than 70
let araliq = [];
for(let i = 0;i<a.length;i++){
    if(arr[i]<35 == 70<arr[i]){
    }
};

console.log(arr[i]);

// When function calling in global area user must add a parameter (number, string, object, boolean)
let array = [25, 95, 'test', 'php', true, {}, 129, 'javascript'];
let ar = [];
function type(arr, a) {
    for (i = 0; i < arr.length; i++) {
        if (a == typeof arr[i]) {
            ar.push(arr[i])
        }
    }
    return ar;
};
let result = type(array, "number");

console.log(result);