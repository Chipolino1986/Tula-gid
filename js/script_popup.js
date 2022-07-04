"use strict"

const open = document.querySelector('.content_box_img');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');


open.addEventListener('click', () => {
    modal.showModal();
});
close.addEventListener('click', () => {
    modal.close();
});
modal.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.close();
    }
})