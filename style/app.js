
/** Function to start when loading the page */
window.onload = main;

/** An collectionfunction that starts at window.onload  */
function main() {
    // Change the backgroundcolor of the page.
    // setInterval(changeTheme, 60000);
    changeTheme()
}

/** Change colors of the page when the evening begins and change back at the morning.
 * It is an automatic nightmode.
 */
const theHour = new Date().getHours();

function changeTheme() {
    
    // Get the hour to use in a IF to change the theme of the page.    

    // Change the backgroundcolor at specific hours.
    if (theHour <= 7 || theHour >= 22) {
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

// Funktion för intersection
// Funktionen som kommer köras vid händelsen
function headerObserver() {
    //getHeaderForBackground.classList.toggle("header-scroll");
    if (window.scrollY == 0 || window.top == 0) {
        return;
    }

    else if (theHour <= 7 || theHour >= 22) {
        darkModeHeader() 
    }

    else  {     
        dayModeHeader()  
    }  
}

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

function darkModeHeader() {
    if (!getHeaderForBackground.classList.contains("header-scroll-dark")) {
        getHeaderForBackground.classList.add("header-scroll-dark");
        }
        else {
        getHeaderForBackground.classList.remove("header-scroll-dark");
    }    
}

function dayModeHeader() {
    if (!getHeaderForBackground.classList.contains("header-scroll-day")) {
        getHeaderForBackground.classList.add("header-scroll-day");
        }
        else {
        getHeaderForBackground.classList.remove("header-scroll-day");
        }
}



// Namn och intersection funktionen
// Här skapas intersection. new Inter... måste innehålla funktionen och option för Intersection
const headerObserverTrigger = new IntersectionObserver(headerObserver, optionsHeaderObserver);

// intersection namnet.observe funktion + vad som ska observeras
headerObserverTrigger.observe(getHeroSection);

/** Varibles for the global scope */
let changeBackground = document.querySelector('body');
const changeHeroImages = document.querySelector('.hero-section');
const changeLogo = document.querySelector('.logo img');
const changeMark = document.querySelector('mark');
const changeH1 = document.querySelector('H1');
const getBtnOne = document.querySelector('.hero-btn-one');
const getBtnTwo = document.querySelector('.hero-btn-two');
const getParagraph = document.querySelectorAll('body > p');
const getMobileHeader = document.querySelector('.header-mobile');
const getNavMobile = document.querySelector('.nav-mobile');
const getNavMobileSocial = document.querySelectorAll('.nav-mobile i');
const getMathText = document.querySelectorAll('.simple-math-text p, h4');
const getMathBtn = document.querySelector('.math-btn');
const getChangeNight = document.querySelector('#night');
const getChangeDay = document.querySelector('#day');

const getHamburgerButton = document.querySelector('.hamburger');
const openMenu = document.querySelector('.nav-mobile');

getHamburgerButton.addEventListener('click', openHamburger);

// Links

const getBtn = document.querySelectorAll(".btn");

for (let i = 0; i < getBtn.length; i++) {
    getBtn[i].addEventListener('mouseover', function(event) {
        event.target.style.color = "var(--middlegrey)";
        event.target.style.backgroundColor = "var(--white)";
    });
}

for (let i = 0; i < getBtn.length; i++) {
getBtn[i].addEventListener('mouseout', function(event) {
    event.target.style.color = "var(--white)";
    event.target.style.backgroundColor = "#efefef55";
});
}

getBtnOne.addEventListener('mouseover', hoverALink);
getBtnOne.addEventListener('mouseout', leaveALink);

function hoverALink() {
    getBtnOne.style.backgroundColor = "var(--white)";
}

function leaveALink() {
    getBtnOne.style.color = "var(--white)";
    getBtnOne.style.backgroundColor = "var(--middlegrey)";
}

getBtnTwo.addEventListener('mouseover', hoverALinkTwo);
getBtnTwo.addEventListener('mouseout', leaveALinkTwo);

function hoverALinkTwo() {
    getBtnTwo.style.backgroundColor = "var(--white)";
}

function leaveALinkTwo() {
    getBtnTwo.style.color = "var(--white)";
    getBtnTwo.style.backgroundColor = "var(--grey";
}

getMathBtn.addEventListener('mouseover', hoverALinkMath);
getMathBtn.addEventListener('mouseout', leaveALinkMath);

function hoverALinkMath() {
    getMathBtn.style.backgroundcolor = "var(--white)";
    getMathBtn.style.color = "var(--darkgrey)!important";
}

function leaveALinkMath() {
    getMathBtn.style.color = "var(--white)";
    getMathBtn.style.backgroundColor = "#FF9F1C";
}

const getAllDesktopLi = document.querySelectorAll('.ul-desktop li');

for (let i = 0; i < getAllDesktopLi.length; i++) {
    getAllDesktopLi[i].addEventListener('mouseover', function(event) {
        event.target.style.fontWeight = "bold";
    });
}

for (let i = 0; i < getAllDesktopLi.length; i++) {
    getAllDesktopLi[i].addEventListener('mouseout', function(event) {
        event.target.style.fontWeight = "unset";
    });
}

const getAllMobileLi = document.querySelectorAll('.ul-mobile li');
  
for (let i = 0; i <getAllMobileLi.length; i++) {
    getAllMobileLi[i].addEventListener('click', openHamburger)
}

function changeMobilSocDark() {   
    getNavMobileSocial.forEach((e) => {
        e.style.color = "var(--white)";
    });
   }

function changeMobilSocDay() {   
    getNavMobileSocial.forEach((e) => {
        e.style.color = "var(--darkgrey)";
    });
   }

function changeMobilLiDark() {   
    getAllMobileLi.forEach((e) => {
        e.style.color = "var(--white)";
    });
   }

function changeMobilLiDay() {   
    getAllMobileLi.forEach((e) => {
        e.style.color = "var(--darkgrey)";
    });
   }

function changeMathDark() {   
    getMathText.forEach((e) => {
        e.style.color = "var(--white)";
    });
   }

function changeMathiDay() {   
    getMathText.forEach((e) => {
        e.style.color = "var(--darkgrey)";
    });
   }

console.log(getAllMobileLi)

function listItemDark() {
 const getDarkClass = document.querySelectorAll(".dark");
 console.log(getDarkClass);

 getDarkClass.forEach((e) => {
     e.style.color = "var(--white)";
 });
}

function listItemDay() {
 const getDay = document.querySelectorAll(".dark");

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