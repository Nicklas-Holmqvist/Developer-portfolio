
/** Function to start when loading the page */
window.onload = main;

/** Varibles for the global scope */
let changeBackground = document.querySelector('body');
const changeHeroImages = document.querySelector('.hero-section');
const changeLogo = document.querySelector('.logo > img');
const changeMark = document.querySelector('mark');
const changeH1 = document.querySelector('H1');

console.log(changeMark);

/** An collectionfunction that starts at window.onload  */
function main() {

    // Change the backgroundcolor of the page.
    changeBackgroundColor();
}

/** Change colors of the page when the evening begins and change back at the morning.
 * It is an automatic nightmode.
 */
function changeBackgroundColor() {
    
    // Get the hour to use in a IF to change the theme of the page.
    const theHour = new Date().getHours();

    // Change the backgroundcolor at specific hours.
    if (theHour <= 6 || theHour >= 18) {
        changeBackground.style.background = "var(--darkgrey)";
        changeHeroImages.style.backgroundImage = "url('./style/img/hero-background-dark.png')";
        listItemDark();
        changeLogo.src = "./style/img/logo-darkmode.png"
        iconDark();
        changeMark.style.color = "var(--darkgrey)";
        changeMark.style.background = "var(--white)";
        changeH1.style.color = "var(--white)";
        btnDark()


    }
    else {
        changeBackground.style.background = "var(--white)";
    }
}


function listItemDark() {
 const getParagraphs = document.querySelectorAll("li");
 console.log(getParagraphs);

 getParagraphs.forEach((e) => {
     e.style.color = "var(--white)";
 });
}

function iconDark() {
 const getIcons = document.querySelectorAll("i");
 console.log(getIcons);

 getIcons.forEach((e) => {
     e.style.color = "var(--white)";
 });
}

function btnDark() {
 const getBtn = document.querySelectorAll(".btn");
 console.log(getBtn);

 getBtn.forEach((e) => {
     e.style.color = "var(--white)";
     e.style.borderColor = "var(--white)";

 });
}
