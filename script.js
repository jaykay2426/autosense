// Mobile navbar toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('show'); // Use CSS class to show/hide
  });
});

// Slide show for hero section
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function changeSlide() {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

setInterval(changeSlide, 5000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  });
});

// Set initial active slide and dot
slides[currentSlide].classList.add('active');
dots[currentSlide].classList.add('active');

// Form toggle (register/login)
const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});







document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');

    // Toggle icon
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.addEventListener('click', () => {
    // Toggle navigation visibility
    navbar.classList.toggle('show');

    // Toggle between menu and cancel icon
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
  });
});






const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
  });
});








  const facts = [
    "🚗 The first car was built in 1885 by Karl Benz.",
    "🛞 The average car has over 30,000 parts!",
    "⚡ Tesla’s Model S can go 0-60 mph in under 2 seconds.",
    "🛠️ Regular oil changes can extend engine life by years.",
    "🌍 The Toyota Corolla is the world’s best-selling car."
  ];
  let i = 0;
  const factBox = document.getElementById("fun-fact");
  setInterval(() => {
    i = (i + 1) % facts.length;
    factBox.textContent = facts[i];
  }, 4000);













  // Adding hover effects dynamically if needed
const features = document.querySelectorAll('.feature');

features.forEach(feature => {
  feature.addEventListener('mouseenter', () => {
    feature.style.transform = 'translateY(-10px)';
    feature.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
  });

  feature.addEventListener('mouseleave', () => {
    feature.style.transform = 'translateY(0)';
    feature.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
  });
});









// Using ScrollReveal for animation effects
ScrollReveal().reveal('.hero-content', { 
  duration: 2000,
  origin: 'top',
  distance: '50px',
  opacity: 0,
  delay: 500
});

ScrollReveal().reveal('.section', { 
  duration: 2000,
  origin: 'bottom',
  distance: '50px',
  opacity: 0,
  delay: 500
});


