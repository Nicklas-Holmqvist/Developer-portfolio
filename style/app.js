/** Function to start when loading the page */
window.onload = main;

/** An collectionfunction that starts at window.onload  */
function main() {
    // Change the backgroundcolor of the page.
    setInterval(changeTheme, 60000);
    changeTheme()
}

/** Change colors of the page when the evening begins and change back at the morning.
 * It is an automatic nightmode.
 */
const theHour = new Date().getHours();

/** Function to change between day- och darkmode at specific times */
function changeTheme() {    
    // Get the hour to use in a IF to change the theme of the page.    
    if (theHour <= 7 || theHour >= 20) {
        darkMode()            
    }
    else {
        dayMode()
    }
    return theHour
}

// Vad intersection ska ändra, om headern ska få bakgrundsfärg eller dylikt
const getHeaderForBackground = document.querySelector('#header');
// Vad interaction ska känna av, vad ska komma in på skärmen för att köra funktionen
const getHeroSection = document.querySelector('.hero-section');

// Inställningar för interaction
//Här finns root, rootMargin och treshold
const optionsHeaderObserver = {
    treshold: .5
};

/** Function to control the headers Intersection at specific times */
function headerObserver() {
    //getHeaderForBackground.classList.toggle("header-scroll");
    if (window.scrollY == 0 || window.top == 0) {
        return;
    }
    else if (theHour <= 7 || theHour >= 20) {
        darkModeHeader() 
    }
    else  {     
        dayModeHeader()  
    }  
}

/** Function with all the functions and static changes for darkmode */
function darkMode() {
    changeBackground.style.background = "var(--darkgrey)";
    changeHeroImages.style.backgroundImage = "url('./style/img/hero-background-dark.png')";
    listItemDark();
    changeLogo.src = "./style/img/logo-darkmode.png"
    changeMark.style.color = "var(--darkgrey)";
    changeMark.style.background = "var(--white)";
    changeH1.style.color = "var(--white)";
    btnDark()
    changeBtnOneDark();
    hamburgerDark();
    changeNavMobileDark()
    changeMobilLiDark()
    changeMobilSocDark()
    changeMathDark()
    changeBtnTwoDark()   
}

/** Function with all the functions and static changes for daymode */
function dayMode() {
    changeBackground.style.background = "var(--white)";
    changeHeroImages.style.backgroundImage = "url('./style/img/hero-background-day.png')";
    changeLogo.src = "./style/img/logo-daymode.png"
    changeMark.style.color = "var(--white)";
    changeMark.style.background = "var(--darkgrey)";
    changeH1.style.color = "var(--darkgrey)";
    listItemDay();
    btnDay()
    changeBtnOneDay()
    hamburgerDay()
    changeNavMobileDay()        
    changeMobilSocDay()
    changeMobilLiDay()
    changeMathiDay()
    changeBtnTwoDay()
    
}

/** Function to add "header-scroll-dark"-class to header
 * This is connected to the function "headerObserver"
 */
function darkModeHeader() {
    if (!getHeaderForBackground.classList.contains("header-scroll-dark")) {
        getHeaderForBackground.classList.add("header-scroll-dark");
        }
        else {
        getHeaderForBackground.classList.remove("header-scroll-dark");
    }    
}

/** Function to add "header-scroll-day"-class to header 
 * This is connected to the function "headerObserver"
*/
function dayModeHeader() {
    if (!getHeaderForBackground.classList.contains("header-scroll-day")) {
        getHeaderForBackground.classList.add("header-scroll-day");
        }
        else {
        getHeaderForBackground.classList.remove("header-scroll-day");
        }
}

/** Varible to a new Intersection for "headerObserver" */
const headerObserverTrigger = new IntersectionObserver(headerObserver, optionsHeaderObserver);

// intersection what to intersect
headerObserverTrigger.observe(getHeroSection);

/** Varibles for the global scope */
/** Varible to get the body element */
let changeBackground = document.querySelector('body');
/** Varible to get the hero-section class */
const changeHeroImages = document.querySelector('.hero-section');
/** Varible to get the logo image in the header */
const changeLogo = document.querySelector('.logo img');
/** Varible to get the mark element */
const changeMark = document.querySelector('mark');
/** Varible to get the H1 element */
const changeH1 = document.querySelector('H1');
/** Varible to get the first button on the hero-section */
const getBtnOne = document.querySelector('.hero-btn-one');
/** Varible to get the second button on the hero-section */
const getBtnTwo = document.querySelector('.hero-btn-two');
/** Varible to get the header-mobile class */
const getMobileHeader = document.querySelector('.header-mobile');
/** Varible to get the nav-mobil class */
const getNavMobile = document.querySelector('.nav-mobile');
/** Varible to get all the social icons in the hamburger menu */
const getNavMobileSocial = document.querySelectorAll('.nav-mobile i');
/** Varible to get all the p and h4 elements in the simple addition section in the portfolio */
const getMathText = document.querySelectorAll('.simple-math-text p, h4');
/** Varible to get the button on the simple addition section in the portfolio */
const getMathBtn = document.querySelector('.math-btn');
/** Varible to get the button on the upplev skogen section in the portfolio */
const getUpplevBtn = document.querySelector('.upplev-btn');
/** Varible to get the hamburger class */
const getHamburgerButton = document.querySelector('.hamburger');
/** Varible to get the button on the simple-math-section in the portfolio */
const openMenu = document.querySelector('.nav-mobile');

// Click on the hamburger button
getHamburgerButton.addEventListener('click', openHamburger);

// Links

/** Varible to get all the .btn classes for the hover states and some styling */
const getBtn = document.querySelectorAll(".btn");

/** A for loop to set a styling for the buttons when hover over */
for (let i = 0; i < getBtn.length; i++) {
    getBtn[i].addEventListener('mouseover', function(event) {
        event.target.style.color = "var(--middlegrey)";
        event.target.style.backgroundColor = "var(--white)";
    });
}

/** A for loop to set a styling for the buttons when mouse leaves */
for (let i = 0; i < getBtn.length; i++) {
getBtn[i].addEventListener('mouseout', function(event) {
    event.target.style.color = "var(--white)";
    event.target.style.backgroundColor = "#efefef55";
});
}

// Addeventlisteners to the hover effect for first button on the hero-section
getBtnOne.addEventListener('mouseover', hoverALink);
getBtnOne.addEventListener('mouseout', leaveALink);

/** Function to change the styling when hover the first button on the hero-section*/
function hoverALink() {
    getBtnOne.style.backgroundColor = "var(--white)";
}

/** Function to change the styling when mouseout the first button on the hero-section*/
function leaveALink() {
    getBtnOne.style.color = "var(--white)";
    getBtnOne.style.backgroundColor = "var(--middlegrey)";
}

// Addeventlisteners to the hover effect for second button on the hero-section
getBtnTwo.addEventListener('mouseover', hoverALinkTwo);
getBtnTwo.addEventListener('mouseout', leaveALinkTwo);

/** Function to change the styling when hover the second button on the hero-section*/
function hoverALinkTwo() {
    getBtnTwo.style.backgroundColor = "var(--white)";
}

/** Function to change the styling when mouseout the second button on the hero-section*/
function leaveALinkTwo() {
    getBtnTwo.style.color = "var(--white)";
    getBtnTwo.style.backgroundColor = "var(--grey";
}

// Addeventlisteners to the hover effect for the "upplev skogen" button
getUpplevBtn.addEventListener('mouseover', hoverALinkUpplev);
getUpplevBtn.addEventListener('mouseout', leaveALinkUpplev);

/** Function to change the styling when hover the button on the "upplev skogen" section */
function hoverALinkUpplev() {
    getUpplevBtn.style.backgroundcolor = "var(--white)";
    getUpplevBtn.style.color = "var(--darkgrey)";
}

/** Function to change the styling when mouseout the button on the "upplev skogen" section */
function leaveALinkUpplev() {
    getUpplevBtn.style.color = "var(--darkgrey)";
    getUpplevBtn.style.backgroundColor = "#FF9F1C";
}

// Addeventlisteners to the hover effect for "simple addition" button
getMathBtn.addEventListener('mouseover', hoverALinkMath);
getMathBtn.addEventListener('mouseout', leaveALinkMath);

/** Function to change the styling when hover the button on the "simple addition" section */
function hoverALinkMath() {
    getMathBtn.style.backgroundcolor = "var(--white)";
    getMathBtn.style.color = "var(--darkgrey)!important";
}

/** Function to change the styling when mouseout the button on the "simple addition" section */
function leaveALinkMath() {
    getMathBtn.style.color = "var(--white)";
    getMathBtn.style.backgroundColor = "#FF9F1C";
}

/** Varible to get all the desktop li objects */
const getAllDesktopLi = document.querySelectorAll('.ul-desktop li');

/** A for loop to change the styling when hover the desktop li objects */
for (let i = 0; i < getAllDesktopLi.length; i++) {
    getAllDesktopLi[i].addEventListener('mouseover', function(event) {
        event.target.style.fontWeight = "bold";
    });
}

/** A for loop to change the styling when mouseout the desktop li objects */
for (let i = 0; i < getAllDesktopLi.length; i++) {
    getAllDesktopLi[i].addEventListener('mouseout', function(event) {
        event.target.style.fontWeight = "unset";
    });
}

/** Varible to get all the mobile li objects */
const getAllMobileLi = document.querySelectorAll('.ul-mobile li');

/** A for loop to close the hamburger menu when click the mobile li objects */
for (let i = 0; i <getAllMobileLi.length; i++) {
    getAllMobileLi[i].addEventListener('click', openHamburger)
}

// Styling

/** Darkmode function to change the styling of the icons in the mobile menu */
function changeMobilSocDark() {   
    getNavMobileSocial.forEach((e) => {
        e.style.color = "var(--white)";
    });
   }

/** Daymode function to change the styling of the icons in the mobile menu */   
function changeMobilSocDay() {   
    getNavMobileSocial.forEach((e) => {
        e.style.color = "var(--darkgrey)";
    });
   }

/** Darkmode function to change the styling of the li elements in the mobile menu */   
function changeMobilLiDark() {   
    getAllMobileLi.forEach((e) => {
        e.style.color = "var(--white)";
    });
   }

/** Daymode function to change the styling of the li elements in the mobile menu */    
function changeMobilLiDay() {   
    getAllMobileLi.forEach((e) => {
        e.style.color = "var(--darkgrey)";
    });
   }

/** Darkmode styling for all the paragraph elements in the "simple addition" section */ 
function changeMathDark() {   
    getMathText.forEach((e) => {
        e.style.color = "var(--white)";
    });
   }

/** Daymode styling for all the paragraph elements in the "simple addition" section */ 
function changeMathiDay() {   
    getMathText.forEach((e) => {
        e.style.color = "var(--darkgrey)";
    });
   }

/** Darkmode styling for all the elements with the class .dark */  
function listItemDark() {
 const getDarkClass = document.querySelectorAll(".dark");
 console.log(getDarkClass);

 getDarkClass.forEach((e) => {
     e.style.color = "var(--white)";
 });
}

/** Daymode styling for all the elements with the class .day */  
function listItemDay() {
 const getDay = document.querySelectorAll(".day");

 getDay.forEach((e) => {
     e.style.color = "var(--middlegrey)";
 });
}


function changeNavMobileDark() {
    getNavMobile.style.backgroundColor = "#141414ee";
}

function changeNavMobileDay() {
    getNavMobile.style.backgroundColor = "#efefefee";
}

function hamburgerDark() {
    const getHamburgerLines = document.querySelectorAll('.hamburger-line');

    getHamburgerLines.forEach((e) => {
        e.style.backgroundColor = "var(--white)";
    });
}

function hamburgerDay() {
    const getHamburgerLines = document.querySelectorAll('.hamburger-line');

    getHamburgerLines.forEach((e) => {
        e.style.backgroundColor = "var(--darkgrey)";
    });
}

function btnDark() {
 const getBtn = document.querySelectorAll(".btn");
 console.log(getBtn);

 getBtn.forEach((e) => {
     e.style.color = "var(--white)";
     e.style.borderColor = "var(--beige)";
 });
}

function btnDay() {
 const getBtn = document.querySelectorAll(".portfolio-btn");
 console.log(getBtn);

 getBtn.forEach((e) => {
     e.style.color = "var(--white)";
     e.style.borderColor = "var(--darkgrey)";
 });
}

function changeBtnOneDark() {
    getBtnOne.style.color = "var(--white)";
    getBtnOne.style.background = "var(--middlegrey)";
}

function changeBtnOneDay() {
    getBtnOne.style.color = "var(--white)";
    getBtnOne.style.background = "var(--middlegrey)";
    getBtnOne.style.borderColor = "var(--beige)";
}

function changeBtnTwoDark() {
    getBtnTwo.style.color = "var(--white)";
    getBtnTwo.style.background = "var(--grey)";
}

function changeBtnTwoDay() {
    getBtnTwo.style.color = "var(--white)";
    getBtnTwo.style.background = "var(--grey)";
}

function changeMathday() {
    getMathText.style.color = "var(--darkgrey)";
}

function openHamburger() {
    openMenu.classList.toggle("hamburger-open"); 
}

// Add Intersection Observer to my content

const getWhatMakes = document.querySelector('.what-makes');
const getPortfolio1 = document.querySelector('.portfolio-container-1');
const getPortfolio2 = document.querySelector('.portfolio-container-2');
const getPortfolio3 = document.querySelector('.portfolio-container-3');
const getAboutMe = document.querySelector('.about-section');
const getFooter = document.querySelector('footer');

const optionContentObserver = {
    treshold: .2
}

function whatMakesObserver () {
    if (window.scrollY == 0) {
        return;
    }
    getWhatMakes.classList.add("animation-fadein")
}

const whatMakesTrigger = new IntersectionObserver(whatMakesObserver, optionContentObserver);

whatMakesTrigger.observe(getWhatMakes);

function portfolio1Observer () {
    if (window.scrollY == 0) {
        return;
    }
    getPortfolio1.classList.add("animation-fadein")
}

const portfolio1Trigger = new IntersectionObserver(portfolio1Observer, optionContentObserver);

portfolio1Trigger.observe(getPortfolio1);

function portfolio2Observer () {
    if (window.scrollY == 0) {
        return;
    }
    getPortfolio2.classList.add("animation-fadein")
}

const portfolio2Trigger = new IntersectionObserver(portfolio2Observer, optionContentObserver);

portfolio2Trigger.observe(getPortfolio2);

function portfolio3Observer () {
    if (window.scrollY == 0) {
        return;
    }
    getPortfolio3.classList.add("animation-fadein")
}

const portfolio3Trigger = new IntersectionObserver(portfolio3Observer, optionContentObserver);

portfolio3Trigger.observe(getPortfolio3);

function getAboutMeObserver () {
    if (window.scrollY == 0) {
        return;
    }
    getAboutMe.classList.add("animation-fadein")
}

const getAboutMeTrigger = new IntersectionObserver(getAboutMeObserver, optionContentObserver);

getAboutMeTrigger.observe(getAboutMe);

function getFooterObserver () {
    if (window.scrollY == 0) {
        return;        
    }
    getFooter.classList.add("animation-fadein")
}

const getfooterTrigger = new IntersectionObserver(getFooterObserver, optionContentObserver);

getfooterTrigger.observe(getFooter);
