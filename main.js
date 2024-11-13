"use strict"
const btn = document.querySelector('#btn');
let isOrg = true;
btn.addEventListener('click', () => {
const text = document.querySelector('.describtion');
if (isOrg){
    text.innerText = 'Learning about what?';
}
else {
    text.innerText = 'Learning about node';
}
isOrg = !isOrg;
});