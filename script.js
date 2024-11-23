// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// POPUP
// let popup = document.getElementById("popup")

// function openpopup(){
// popup.classList.add("open-popup")
// }

// function closepopup(){
//     popup.classList.remove("open-popup")
//     }

    
// const texts = [
//     "PHOTOGRAPHER",
//     " GRAPHIC DESIGNER",
//     "VEDIO EDITOR"
// ]

// let speed  =100;
// const textElements = document.querySelector(".typewriter-text");

// let textIndex = 0;
// let charcterIndex = 0;

// function typeWriter(){
//     if (charcterIndex < texts[textIndex].length){
//         textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
//         charcterIndex++;
//         setTimeout(typeWriter, speed); 
//     }
//     else{
//         setTimeout(eraseText, 1000)
//     }
// }

// function eraseText(){
//     if(textElements.innerHTML.length > 0){
//         textElements.innerHTML = textElements.innerHTML.slice(0,-1);
//         setTimeout(eraseText, 50)
//     }
//     else{
//         textIndex = (textIndex + 1) % texts.length;
//         charcterIndex = 0;
//         setTimeout(typeWriter, 500)
//     }
// }

// window.onload = typeWriter
