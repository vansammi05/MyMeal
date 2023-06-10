const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
var typed = new Typed(".auto-type",{
  strings: ['Real Taste','Spices'],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
let a = document.getElementById('p55').addEventListener('click',function(){
  location.href = 'file:///C:/Users/Jasvinder%20Pal/OneDrive/Desktop/Food%20Website/submit%20file/index.html'
})