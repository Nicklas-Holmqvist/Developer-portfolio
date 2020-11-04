
/** Function to start when loading the page */
window.onload = main;

/** Varibles for the global scope */
let changeBackground = document.querySelector('body');
const changeHeroImages = document.querySelector('.hero-section');
const changeLogo = document.querySelector('.logo > img');

console.log(changeLogo);

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
        changeBackground.style.background = "#141414";
        changeHeroImages.style.backgroundImage = "url('./style/img/hero-background-dark.png')";
        paragraphDark();
        changeLogo.src = "./style/img/logo-darkmode.png"

    }
    else {
        changeBackground.style.background = "#FFFFFF";
    }
}


function paragraphDark() {
 const getParagraphs = document.querySelectorAll("li");
 console.log(getParagraphs);

 getParagraphs.forEach((e) => {
     e.style.color = "white";
 });
}
