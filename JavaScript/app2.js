/*let div = document.createElement('div');
div.classList.add('block');
document.querySelector('body').appendChild(div);

for (let i=0; i<10; i++){
    let diviki = document.createElement('div');
    document.querySelector('div').appendChild(diviki);
    diviki.innerText = i+1;
    diviki.classList.add('miniBlock');
}
*/

let names = document.querySelector(".name");
let surnames = document.querySelector(".surname");


document.querySelector('.btn').addEventListener('click', (event) => {
   event.preventDefault();
   let nametext  =document.createElement("p");
   document.body.appendChild(nametext)
   let surnametext =document.createElement("p");
   document.body.appendChild(surnametext);
   nametext.textContent = names.value;
   surnametext.textContent = surnames.value;
}) ;