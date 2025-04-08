const menuIcon = document.querySelector('#menu-icon');
const navbar = document.getElementById('navbar');

let isNavbarVisible = true;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active'); 

    if (isNavbarVisible) {
        console.log('LOG');
        navbar.style.display = 'none';
        isNavbarVisible = false;
    } else {
        console.log('LOG 2');
        navbar.style.display = 'block';
        isNavbarVisible = true;
    }
};







  const leftSlides = document.querySelectorAll(".left-slideshow .slide");
  let currentLeft = 0;

  function showLeftSlide(index) {
    leftSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextLeftSlide() {
    currentLeft = (currentLeft + 1) % leftSlides.length;
    showLeftSlide(currentLeft);
  }

  showLeftSlide(currentLeft);
  setInterval(nextLeftSlide, 3000); // Change every 3 seconds
