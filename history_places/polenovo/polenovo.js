'use strict'

let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider_container');
const track = document.querySelector('.slider_track');
const btnPrev = document.querySelector('.btn_prev');
const btnNext = document.querySelector('.btn_next');
const sliderItem = document.querySelectorAll('.slider_item');
const itemsCount = sliderItem.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

sliderItem.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click',() => {
    const sliderItemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= sliderItemLeft >= slidesToScroll ? movePosition : aliderItemLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click',() => {
    const sliderItemLeft = Math.abs(position) / itemWidth;
    position += sliderItemLeft >= slidesToScroll ? movePosition : sliderItemLeft * itemWidth;  

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
checkBtns();

