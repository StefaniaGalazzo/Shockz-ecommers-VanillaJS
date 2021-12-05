const sliderContainer = document.querySelector(".slider-container"); 
const slideRight = document.querySelector(".right-slide");  
const slideLeft = document.querySelector(".left-slide");  

const upButton = document.querySelector(".up-button");  
const downButton = document.querySelector(".down-button");  

const slidesLength = slideRight.querySelectorAll("div").length;  

console.log(slideRight.querySelectorAll("div"))

let activeSlideIndex = 0;  

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;  

const changeSlide = (direction) => {  
    const sliderHeight = sliderContainer.clientHeight;  
    if (direction === "up") {  
    activeSlideIndex++;  
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;  
    } else if (direction === "down") {  
    activeSlideIndex--;  
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;  
    }  
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;  
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;  
};  


let updateImage = setInterval(() => {
    changeSlide("up");
}, 3500);


upButton.addEventListener("click", (e) => {
    console.log(e.target)
    changeSlide("up"); });

downButton.addEventListener("click", () => changeSlide("down"));  
