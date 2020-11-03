
/** Function to start when loading the page */
window.onload = main;

/** Varibles for the global scope */
let changeBackground = document.querySelector('body');

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
        changeBackground.style.background = "#000000";
    }
    else {
        changeBackground.style.background = "#FFFFFF";
    }
}
