const btnUp = document.querySelector('.up-button');
const btnDown = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.children.length;
const container = document.querySelector('.container')

let currentSlide = 0;


sidebar.style.top = `-${slidesCount - 1}00vh`;

btnUp.addEventListener('click', () => {
    changeSlide('up')
})

btnDown.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if(direction === 'up') {
        currentSlide++;
        if(currentSlide === slidesCount) {
            currentSlide = 0;
        }
    } else if (direction === 'down') {
        currentSlide--;
        if(currentSlide < 0) {
            currentSlide = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${currentSlide * height}px)`;

    sidebar.style.transform = `translateY(${currentSlide * height}px)`;
}