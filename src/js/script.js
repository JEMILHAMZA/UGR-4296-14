


document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if (navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      navbarBurgers.forEach(function (el) {
        el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = el.dataset.target;
          var targetElement = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          targetElement.classList.toggle('is-active');
        });
      });
    }
  });


//   education-slides!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



  

// Get the elements for the slides and slide buttons
const slidesContainer = document.querySelector('.education-slide-container');
const slides = document.querySelectorAll('.education-slides');
const slideButtonLeft = document.querySelector('.slide-button-left');
const slideButtonRight = document.querySelector('.slide-button-right');

// Set the initial slide index
let currentSlide = 0;

// Function to show the current slide
const showSlide = () => {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slides[currentSlide].style.display = 'flex';
};

// Event listener for the left slide button
slideButtonLeft.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
});

// Event listener for the right slide button
slideButtonRight.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
});

// Show the initial slide
showSlide();




// hobby slides!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.addEventListener("DOMContentLoaded", function() {
    const prevSlide = document.getElementById("prev-slide");
    const nextSlide = document.getElementById("next-slide");
    const slideContainer = document.querySelector(".hobby-slides");
    const slideOne = document.querySelector(".hobby-slides__one");
    const slideTwo = document.querySelector(".hobby-slides__two");

    let currentSlide = 1;

    // Function to show the current slide
    function showSlide() {
      if (currentSlide === 1) {
        slideOne.style.transform = "translateX(0)";
        slideTwo.style.transform = "translateX(100%)";
      } else if (currentSlide === 2) {
        slideOne.style.transform = "translateX(-100%)";
        slideTwo.style.transform = "translateX(0)";
      }
    }

    // Click event listener for the previous slide
    prevSlide.addEventListener("click", function() {
      if (currentSlide === 1) {
        currentSlide = 2;
      } else {
        currentSlide = 1;
      }
      showSlide();
    });

    // Click event listener for the next slide
    nextSlide.addEventListener("click", function() {
      if (currentSlide === 1) {
        currentSlide = 2;
      } else {
        currentSlide = 1;
      }
      showSlide();
    });
  });

  // the hamburger!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

navbarBurger.addEventListener('click', function () {
  this.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});