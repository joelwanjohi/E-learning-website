var right=document.getElementById("rightpart");
var signupinfo=document.getElementById("signupinfo");
var signupform=document.getElementById("signupform");
var exchangesignup=document.getElementById("exchange");
var left=document.getElementById("leftpart");
var signinform=document.getElementById("signinform");

var signinform=document.getElementById("signin-form");
var signinheading=document.getElementById("signinheading");

var signininfo=document.getElementById("signininfo");

var signinexchange=document.getElementById("signinexchange").addEventListener('click',()=>{
    signupinfo.style.display="flex";
    signupform.style.display="none";
    
    left.style.backgroundColor="white";
    right.style.backgroundColor="rgb(89, 60, 255)";


    signinform.style.display="flex";
    signinheading.style.display="block";
    signininfo.style.display="none";
})

exchangesignup.addEventListener('click',()=>{

    
    signupinfo.style.display="none";
    signupform.style.display="block";
    
    left.style.backgroundColor="rgb(89, 60, 255)";
    right.style.backgroundColor="white";


    signinform.style.display="none";
    signinheading.style.display="none";
    signininfo.style.display="flex";

    
});



const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;


let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});



const infiniteScroll = () => {
    
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
   
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

   
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 
   
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1000);
}
autoPlay();


carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);



