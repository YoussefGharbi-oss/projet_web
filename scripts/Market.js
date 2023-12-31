const slider = document.querySelector(".slide-wrapper")
const slides = document.querySelectorAll(".slide")

let slideIndex = 1 
showSlides(slideIndex) 
let slideInterval = setInterval(() => plusSlides(1), 2000);

function plusSlides(n){
  clearInterval(slideInterval);
  slideInterval = setInterval(() => plusSlides(1), 2000);
  showSlides(slideIndex += n)

} 
function currentSlide(n) {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => plusSlides(1), 2000);
    showSlides(slideIndex = n);
  }
  
function showSlides(n) {
     let i ; 
     let slides = document.getElementsByClassName("slide") 
     let dots = document.getElementsByClassName("dot");

     if (n>slides.length){slideIndex = 1}
     if(n<1){slideIndex = slides.length}
     for(i = 0 ; i < slides.length ; i++) {
        slides[i].style.display = "none"
     }
     for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";

      dots[slideIndex-1].className += " active";


}
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
let buttons = document.querySelectorAll(".follow-btn")
buttons.forEach((e)=>{
  
    e.addEventListener("click",()=>{
        e.innerHTML = "Followed"
    })

})