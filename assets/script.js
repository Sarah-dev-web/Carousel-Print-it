const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const flechegauche = document.querySelector(".arrow_left");
const flechedroite = document.querySelector(".arrow_right");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;
updateDotIndicator();

flechedroite.addEventListener("click", function () {
    currentIndex = currentIndex + 1;
	if(currentIndex == slides.length){
		currentIndex = 0
	}
    updateBannerContent();
    updateDotIndicator();
});

flechegauche.addEventListener("click", function () {
	currentIndex = currentIndex - 1;
    if(currentIndex <= 0){
		currentIndex = slides.length - 1
	}
    updateBannerContent();
    updateDotIndicator();
});

dots.forEach((dot, index) => {
	dot.addEventListener("click", function(){
		currentIndex = index
		updateBannerContent();
		updateDotIndicator();
	});
});

function updateBannerContent() {
    let bannerImg = document.querySelector(".banner-img");
    let bannerTagLine = document.querySelector("#banner p");

    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerTagLine.innerHTML = slides[currentIndex].tagLine;
}

function updateDotIndicator() {
    
    dots.forEach((dot, index) => {
        dot.classList.remove("dot_selected");
    });

    dots[currentIndex].classList.add("dot_selected");
}

