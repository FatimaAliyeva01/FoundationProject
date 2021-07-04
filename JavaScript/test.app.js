// Calculator

function sum( x,y){
x=10;
y=5;
    console.log(x+y);
};

function çıxma(x,y) {
x=10;
y=5;
    console.log(x-y);
}

function  bolme(x,y){
x=10;
y=5;
    console.log(x/y);
};

function vurma(x,y) {
x=10;
y=5;
    console.log(x*y);
}

function quvvetUstu (x,y) {
x=10;
y=5;
    console.log(x**y);
}
 vurma();
 mynumber= 36

 alert ("6 *6 = "+ mynumber );
 

 //document.write("Hello World");
  //let a = "Hello Fatima";
  //console.log(a);
  //typeof a
  //console.log(a);

  // &&
  let x = 5;
  let y = 9;
 let a = x < 10 && y < 11;
console.log(a);
  // ||
  let s = 5;
  let f = 9;
 let b = s < 10 || f < 1;
 console.log(b);
// ==
let bb = 5;
let ba = 5;
let c = bb =! ba;
let d = typeof ba;
console.log(d);


let arr = [25,5,10,30,90]
let max = 0
for (let i=0;i<arr.length;i++) {
    if (arr[i] > max ) {
        max = arr[i]
    }
};
    console.log(max)





    let str = "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sequi repellat ab blanditiis magnam, iusto unde voluptatum illo quam dicta soluta dolorem culpa. Sint beatae aspernatur eveniet sed voluptate qui."
   
    count =0;

    function find(a){
        for(let i=0; i<str.length; i++){
            if (str[i]==a){
                count+=1
            } 
        };


