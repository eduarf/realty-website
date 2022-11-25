const list = document.querySelector('.gallery-carousel__list');
const imgs = Array.from(list.children);
const nextButton = document.querySelector('.gallery-carousel__button--right');
const prevButton = document.querySelector('.gallery-carousel__button--left');
const carouselNav = document.querySelector('.gallery-carousel__nav');
const dots = Array.from(carouselNav.children);


// Getting the width of our images
const imgWidth = imgs[0].getBoundingClientRect();
const setImgPosition = (img,index) => {
    img.style.left = imgWidth.width * index + "px";
    //               nextImg * 1 + px = ....px;
    //               nextImg * 2 + px = ....*2px;
};

imgs.forEach(setImgPosition);

const moveToImg = (list, currentImg, targetImg) => {
    list.style.transform = "translateX(-" + targetImg.style.left +")";
    currentImg.classList.remove('current--img');
    targetImg.classList.add('current--img');
};

const updateDots = (currentDot, targetDot) => { 
    currentDot.classList.remove('current--img');
    targetDot.classList.add('current--img');
};

nextButton.addEventListener('click',(e) => {
    const currentImg = list.querySelector('.current--img');
    const nextImg = currentImg.nextElementSibling;;
    const currentDot = carouselNav.querySelector('.current--img');
    const nextDot = currentDot.nextElementSibling;
    moveToImg(list, currentImg, nextImg);
    updateDots(currentDot, nextDot);
});


// Left Button
prevButton.addEventListener('click',(e) => {
    const currentImg = list.querySelector('.current--img');
    const prevImg = currentImg.previousElementSibling;
    const currentDot = carouselNav.querySelector('.current--img');
    const prevDot = currentDot.previousElementSibling;
    moveToImg(list, currentImg, prevImg);
    updateDots(currentDot, prevDot);
});

// When we click on the Carousel Nav, switch the images


carouselNav.addEventListener('click',(e) => {
    // What dot was clicked on 

    const targetDot = e.target.closest('button');
    
    if(!targetDot) return;

    const currentImg = list.querySelector('.current--img');
    const currentDot = carouselNav.querySelector('.current--img');
    const targetIndex = dots.findIndex((dot) => dot == targetDot);
    const targetImg = imgs[targetIndex];

    moveToImg(list, currentImg, targetImg);
    updateDots(currentDot, targetDot);

});
