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
