
let slideIndex = 1;
var timer = null;
afterTime(15000);

showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    
    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";

    afterTime(15000);
}


function afterTime(delay) { 
    clearInterval(timer);
    timer = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
        console.log('1')
    }, delay);
}
