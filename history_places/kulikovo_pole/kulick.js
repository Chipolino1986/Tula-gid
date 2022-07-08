'use strict'


let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;
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


// ----------------------popUp------------------------------

const openPopUp = document.getElementById('open_pop_up');
const openPopUp1 = document.getElementById('open_pop_up1');
const openPopUp2 = document.getElementById('open_pop_up2');
const openPopUp3 = document.getElementById('open_pop_up3');
const openPopUp4 = document.getElementById('open_pop_up4');
const openPopUp5 = document.getElementById('open_pop_up5');

const closePopUp = document.getElementById('pop_up_close');
const closePopUp1 = document.getElementById('pop_up_close1');
const closePopUp2 = document.getElementById('pop_up_close2');
const closePopUp3 = document.getElementById('pop_up_close3');
const closePopUp4 = document.getElementById('pop_up_close4');
const closePopUp5 = document.getElementById('pop_up_close5');

const popUp = document.getElementById('pop_up');
const popUp1 = document.getElementById('pop_up1');
const popUp2 = document.getElementById('pop_up2');
const popUp3 = document.getElementById('pop_up3');
const popUp4 = document.getElementById('pop_up4');
const popUp5 = document.getElementById('pop_up5');

const popUpContainer = document.getElementById('pop_up_container');
const popUpContainer1 = document.getElementById('pop_up_container1');
const popUpContainer2 = document.getElementById('pop_up_container2');
const popUpContainer3 = document.getElementById('pop_up_container3');
const popUpContainer4 = document.getElementById('pop_up_container4');
const popUpContainer5 = document.getElementById('pop_up_container5');


openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})
openPopUp1.addEventListener('click', function(e) {
    e.preventDefault();
    popUp1.classList.add('active');
})
openPopUp2.addEventListener('click', function(e) {
    e.preventDefault();
    popUp2.classList.add('active');
})
openPopUp3.addEventListener('click', function(e) {
    e.preventDefault();
    popUp3.classList.add('active');
})
openPopUp4.addEventListener('click', function(e) {
    e.preventDefault();
    popUp4.classList.add('active');
})
openPopUp5.addEventListener('click', function(e) {
    e.preventDefault();
    popUp5.classList.add('active');
})

// -----------------------------------------------------

closePopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.remove('active');
})
closePopUp1.addEventListener('click', function (e) {
    e.preventDefault();
    popUp1.classList.remove('active');
})
closePopUp2.addEventListener('click', function (e) {
    e.preventDefault();
    popUp2.classList.remove('active');
})
closePopUp3.addEventListener('click', function (e) {
    e.preventDefault();
    popUp3.classList.remove('active');
})
closePopUp4.addEventListener('click', function (e) {
    e.preventDefault();
    popUp4.classList.remove('active');
})
closePopUp5.addEventListener('click', function (e) {
    e.preventDefault();
    popUp5.classList.remove('active');
})