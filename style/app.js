/** Function to start when loading the page */
window.onload = main;

/** An collectionfunction that starts at window.onload  */
function main() {
    // Change the backgroundcolor of the page.
    setInterval(changeTheme, 60000);
    changeTheme()
    initScrollBehaviour()
}

/** Change colors of the page when the evening begins and change back at the morning.
 * It is an automatic nightmode.
 */
const theHour = new Date().getHours();

/** Function to change between day- och darkmode at specific times */
function changeTheme() {    
    
    //An if statement to rotate the day- and darkmode when the time is right
    if (theHour <= 7 || theHour >= 18) {
        darkMode()            
    }
    else {
        dayMode()
    }
    return theHour
}

/** Varible to get the header element id */
const getHeaderForBackground = document.querySelector('#header');

/** Varible for the triggerpoint in the intersection for the header */
const getHeroSection = document.querySelector('.hero-section');

/** Settings within an object for the intersection to the header */
const optionsHeaderObserver = {
    treshold: .5
};

/** Function to control the headers Intersection at specific times and mode */
function headerObserver() {
    //getHeaderForBackground.classList.toggle("header-scroll");
    if (window.scrollY == 0 || window.top == 0) {
        return;
    }
    else if (theHour <= 7 || theHour >= 18) {
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

//
//  VARIBLES FOR GLOBAL SCOPE
//  
//  There are more but they are connected to the functions more closely
//

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

//
// HOVER STYLING 
//

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
    getUpplevBtn.style.backgroundColor = "unset";
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

/** Smooth scroll script for inline links
 * Speed change of the time to get where you want 
 * Copied from the lesson material from David
 */
function initScrollBehaviour() {
    let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500
    });
}

//
//  STYLING
//

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

/** Darkmode styling for backgroundcolor of the hamburger menu */  
function changeNavMobileDark() {
    getNavMobile.style.backgroundColor = "#141414ee";
}

/** Daymode styling for backgroundcolor of the hamburger menu */  
function changeNavMobileDay() {
    getNavMobile.style.backgroundColor = "#efefefee";
}

/** Darkmode styling for the hamburger button lines */ 
function hamburgerDark() {
    const getHamburgerLines = document.querySelectorAll('.hamburger-line');

    getHamburgerLines.forEach((e) => {
        e.style.backgroundColor = "var(--white)";
    });
}

/** Daymode styling for the hamburger button lines */  
function hamburgerDay() {
    const getHamburgerLines = document.querySelectorAll('.hamburger-line');

    getHamburgerLines.forEach((e) => {
        e.style.backgroundColor = "var(--darkgrey)";
    });
}

/** Darkmode styling for all the standard buttons */ 
function btnDark() {
 const getBtn = document.querySelectorAll(".btn");
 console.log(getBtn);

 getBtn.forEach((e) => {
     e.style.color = "var(--white)";
     e.style.borderColor = "var(--beige)";
 });
}

/** Daymode styling for all the standard buttons */  
function btnDay() {
 const getBtn = document.querySelectorAll(".portfolio-btn");
 console.log(getBtn);

 getBtn.forEach((e) => {
     e.style.color = "var(--white)";
     e.style.borderColor = "var(--darkgrey)";
 });
}

/** Darkmode styling for first button in the hero-section */  
function changeBtnOneDark() {
    getBtnOne.style.color = "var(--white)";
    getBtnOne.style.background = "var(--middlegrey)";
}

/** Daymode styling for first button in the hero-section */  
function changeBtnOneDay() {
    getBtnOne.style.color = "var(--white)";
    getBtnOne.style.background = "var(--middlegrey)";
    getBtnOne.style.borderColor = "var(--beige)";
}

/** Darkmode styling for the second button in the hero-section */ 
function changeBtnTwoDark() {
    getBtnTwo.style.color = "var(--white)";
    getBtnTwo.style.background = "var(--grey)";
}

/** Daymode styling for the second button in the hero-section */  
function changeBtnTwoDay() {
    getBtnTwo.style.color = "var(--white)";
    getBtnTwo.style.background = "var(--grey)";
}

/** Daymode styling for the parapgraphs elements in the "simple addition" section */ 
function changeMathday() {
    getMathText.style.color = "var(--darkgrey)";
}

/** Toggle function for the hamburger menu, puts the class "hamburger-open" on "nav-mobile" */
function openHamburger() {
    openMenu.classList.toggle("hamburger-open"); 
    changeBackground.classList.toggle("body-lock")
}

//
// INTERSECTION FOR THE BODY
//
// The header intersection is on the top in this file
//

/** Varible to get the what-makes section class */
const getWhatMakes = document.querySelector('.what-makes');
/** Varible to get the first part of the portfolio section class */
const getPortfolio1 = document.querySelector('.portfolio-container-1');
/** Varible to get the second part of the portfolio section class */
const getPortfolio2 = document.querySelector('.portfolio-container-2');
/** Varible to get the third part of the portfolio section class */
const getPortfolio3 = document.querySelector('.portfolio-container-3');
/** Varible to get the about-me section class */
const getAboutMe = document.querySelector('.about-section');
/** Varible to get the footer section class */
const getFooter = document.querySelector('footer');

/** An object with settings for the Intersection, when they should trigger in relation to choosed class */
const optionContentObserver = {
    treshold: .2
}

/** Interaction function to trigger the animation of the what-makes section */
function whatMakesObserver () {
    if (window.scrollY == 0) {
        return;
    }
    getWhatMakes.classList.add("animation-fadein")
}

/** Varible and a Interactionfunction for what-makes section */
const whatMakesTrigger = new IntersectionObserver(whatMakesObserver, optionContentObserver);

whatMakesTrigger.observe(getWhatMakes);

/** Interaction function to trigger the animation of the first part of the portfolio section */
function portfolio1Observer () {
    if (window.scrollY == 0) {
        return;
    }
    getPortfolio1.classList.add("animation-fadein")
}

/** Varible and a Interactionfunction for the first part in the portfolio section */
const portfolio1Trigger = new IntersectionObserver(portfolio1Observer, optionContentObserver);

portfolio1Trigger.observe(getPortfolio1);

/** Interaction function to trigger the animation of the second part of the portfolio section */
function portfolio2Observer () {
    if (window.scrollY == 0) {
        return;
    }
    getPortfolio2.classList.add("animation-fadein")
}

/** Varible and a Interactionfunction for the second part in the portfolio section */
const portfolio2Trigger = new IntersectionObserver(portfolio2Observer, optionContentObserver);

portfolio2Trigger.observe(getPortfolio2);

/** Interaction function to trigger the animation of the third part of the portfolio section */
function portfolio3Observer () {
    if (window.scrollY == 0) {
        return;
    }
    getPortfolio3.classList.add("animation-fadein")
}

/** Varible and a Interactionfunction for the second part in the portfolio section */
const portfolio3Trigger = new IntersectionObserver(portfolio3Observer, optionContentObserver);

portfolio3Trigger.observe(getPortfolio3);

/** Interaction function to trigger the animation of the about-me section */
function getAboutMeObserver () {
    if (window.scrollY == 0) {
        return;
    }
    getAboutMe.classList.add("animation-fadein")
}

/** Varible and a Interactionfunction for the about-me section */
const getAboutMeTrigger = new IntersectionObserver(getAboutMeObserver, optionContentObserver);

getAboutMeTrigger.observe(getAboutMe);

/** Interaction function to trigger the animation of the footer section */
function getFooterObserver () {
    if (window.scrollY == 0) {
        return;        
    }
    getFooter.classList.add("animation-fadein")
}

/** Varible and a Interactionfunction for the footer section */
const getfooterTrigger = new IntersectionObserver(getFooterObserver, optionContentObserver);

getfooterTrigger.observe(getFooter);
