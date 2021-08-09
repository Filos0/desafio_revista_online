//Search button active mode
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
    icon.onclick = function(){
        search.classList.toggle('active')
    }


    //Burger icon shifting


const navSlide = () => {
const burger = document.querySelector('.navbar__burger');
const nav = document.querySelector('.navbar__nav-links');
const navlinks = document.querySelectorAll('.navbar__nav-links li');
 

    burger.addEventListener('click', () => {

           //toggle nav

        nav.classList.toggle('nav-active');

            //animating navbar links in small screens

    navlinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else{
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
       
        });
         //burger animation
        burger.classList.toggle('toggle');
    });


   
}

navSlide(); 

