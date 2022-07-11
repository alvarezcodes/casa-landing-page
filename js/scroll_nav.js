let lastScrollTop = 0;

let navbar = document.getElementById('navbar');

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        // navbar.style.top = "-80px";
        navbar.style.backgroundColor = "rgba(71, 71, 71, 0.9)";
    }else{
        navbar.style.top = "0";
        navbar.style.backgroundColor = "rgba(184, 184, 184, 0.1)";
    }
    lastScrollTop = scrollTop;
})



// NAV BAR HAMBURGER
let menu = document.getElementById('icon');

function showMenu() {
    let navMenu = document.getElementById('nav-show')

    console.log('clicked');
    navMenu.classList.toggle('show')
}

menu.addEventListener('click', showMenu)





// NAV BAR MOUSE OVER - Enter and Leave
function navDarkHover(){
    navbar.style.backgroundColor = "rgba(71, 71, 71, 0.9)";
}

function navLightHover(){
    navbar.style.backgroundColor = "rgba(184, 184, 184, 0.1)";
}

navbar.addEventListener("mouseover", navDarkHover);
navbar.addEventListener("mouseleave", navLightHover);






// CLOSE THE MENU AFTER CLICKING A SELECTION
let navItem = document.getElementById('navItem')
let navShow = document.querySelector('#nav-menu ul')

let nShow = document.getElementById('nav-menu').getElementsByTagName('ul')

function closeMenu(){
    // nav .nav-menu ul
    // left: -200px;
    // nShow.classList.remove('show')

}

navItem.addEventListener('click', closeMenu);


// var myList = document.getElementById('navcontainer').getElementsByTagName('ul')[
