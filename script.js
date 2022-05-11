let slideIndex = 1; 
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides) {
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
   }
    slides[slideIndex-1].style.display = "block";  
  }
  
}

setInterval(() => {
    plusSlides(1);
}, 1500);

/*--------------------------------------------------------------*/
const bigImg=document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelectorAll(".product-content-left-small-img img");
smallImg.forEach((imgItem, X) => {
  imgItem.addEventListener("click", ()=>{
    bigImg.src = imgItem.src;
  })
});

const chitiet=document.querySelector(".chitiet");
const mota=document.querySelector(".mota");
if (chitiet) {
  chitiet.addEventListener("click", () => {
    document.querySelector(".product-content-right-bottom-content-mota").style.display = "none";
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block";
  })
}
if (mota) {
  mota.addEventListener("click", () => {
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none";
    document.querySelector(".product-content-right-bottom-content-mota").style.display = "block";
  })
}
const button=document.querySelector(".product-content-right-bottom-top");
if (button) {
  button.addEventListener("click",()=> {
    document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB");
  })
}