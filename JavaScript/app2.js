let div = document.createElement('div');
document.querySelector('body').appendChild(div);
div.classList.add('block');
div.setAttribute('style','size:400px');
for(i = 0; i< 10;i++){
    let child = document.createElement('div');
    document.querySelector('.block').appendChild(child);
    child.classList.add('miniBlock');
    child.innerText = i +1;

} 