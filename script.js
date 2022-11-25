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
}

imgs.forEach(setImgPosition);

const moveToImg = (list, currentImg, targetImg) => {
    list.style.transform = "translateX(-" + targetImg.style.left +")";
    currentImg.classList.remove('current--img');
    targetImg.classList.add('current--img');
}

nextButton.addEventListener('click',(e) => {
    const currentImg = list.querySelector('.current--img');
    const nextImg = currentImg.nextElementSibling;

    moveToImg(list, currentImg, nextImg);
});


// Left Button
prevButton.addEventListener('click',(e) => {
    const currentImg = list.querySelector('.current--img');
    const prevImg = currentImg.previousElementSibling;

    moveToImg(list, currentImg, prevImg);
});
