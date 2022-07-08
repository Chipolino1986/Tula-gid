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

// -------------------------------------------------------------------------

const popUpContainers = document.querySelectorAll('.img_box_polenovo');

popUpContainers.forEach(container => {
    const btnImgOpen = container.querySelector('.img_polenovo_1');
    const popUp = container.querySelector('.pop_up');
    const popUpContainer = popUp.querySelector('.pop_up_container');
    const popUpClose = popUp.querySelector('.pop_up_close');
    const withoutContainer = popUp.dataset.withoutContainer;
    const withoutCross = popUp.dataset.withoutCross;

    btnImgOpen.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    })

    if(!withoutContainer) {
        popUpContainer.addEventListener('click', function(e) {
            e.preventDefault();
            if (e.target === popUpContainer) {
                popUp.classList.remove('active');
            }
        })
    }
    if(!withoutCross) {
        popUpClose.addEventListener('click', function(e) {
            e.preventDefault();
            popUp.classList.remove('active');
        })
    } else {
        popUpClose.style.display = 'none';
    }
})
