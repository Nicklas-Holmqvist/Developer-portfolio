
/** Function to start when loading the page */
window.onload = main;

/** Varibles for the global scope */
let changeBackground = document.querySelector('body');
const changeHeroImages = document.querySelector('.hero-section');
const changeLogo = document.querySelector('.logo > img');
const changeMark = document.querySelector('mark');
const changeH1 = document.querySelector('H1');
const getBtnOne = document.querySelector('.hero-btn-one');
const getParagraph = document.querySelectorAll('body > p');

const getHamburgerButton = document.querySelector('.hamburger');
const openMenu = document.querySelector('.nav-mobile');


getHamburgerButton.addEventListener('click', openHamburger);
console.log(changeMark);

console.log(openHamburger);

/** An collectionfunction that starts at window.onload  */
function main() {

    // Change the backgroundcolor of the page.
    setInterval(changeBackgroundColor, 60000);
    changeBackgroundColor()
}

/** Change colors of the page when the evening begins and change back at the morning.
 * It is an automatic nightmode.
 */
function changeBackgroundColor() {
    
    // Get the hour to use in a IF to change the theme of the page.
    const theHour = new Date().getHours();

    // Change the backgroundcolor at specific hours.
    if (theHour <= 7 || theHour >= 17) {
        changeBackground.style.background = "var(--darkgrey)";
        changeHeroImages.style.backgroundImage = "url('./style/img/hero-background-dark.png')";
        listItemDark();
        changeLogo.src = "./style/img/logo-darkmode.png"
        changeMark.style.color = "var(--darkgrey)";
        changeMark.style.background = "var(--white)";
        changeH1.style.color = "var(--white)";
        btnDark()
        changeBtnOneDark();


    }
    else {
        changeBackground.style.background = "var(--white)";
        changeHeroImages.style.backgroundImage = "url('./style/img/hero-background-day.png')";
        changeLogo.src = "./style/img/logo-daymode.png"
        changeMark.style.color = "var(--white)";
        changeMark.style.background = "var(--darkgrey)";
        changeH1.style.color = "var(--darkgrey)";
        listItemDay();
        btnDay()
        changeBtnOneDay()
    }
}


function listItemDark() {
 const getDarkClass = document.querySelectorAll(".dark");
 console.log(getDarkClass);

 getDarkClass.forEach((e) => {
     e.style.color = "var(--white)";
 });
}

function listItemDay() {
 const getDay = document.querySelectorAll(".dark");
 console.log(getDay);

 getDay.forEach((e) => {
     e.style.color = "var(--middlegrey)";
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
 const getBtn = document.querySelectorAll(".btn");
 console.log(getBtn);

 getBtn.forEach((e) => {
     e.style.color = "var(--middlegrey)";
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

function openHamburger() {
    openMenu.classList.toggle("hamburger-open"); 
}

// Vad intersection ska ändra, om headern ska få bakgrundsfärg eller dylikt
const getHeaderForBackground = document.querySelector('#header');
// Vad interaction ska känna av, vad ska komma in på skärmen för att köra funktionen
const getHeroSection = document.querySelector('.hero-section');

// Inställningar för interaction
//Här finns root, rootMargin och treshold
const optionsHeaderObserver = {
    rootMargin: "-250px"
};

// Funktion för intersection
// Funktionen som kommer köras vid händelsen
function headerObserver() {
    getHeaderForBackground.classList.toggle("header-scroll");

    //Vet inte hur jag ska få till en IF här. Vad ska den känna av. Kevin Powell funkar nere.
    /*if (getHeaderForBackground.classList.contains != "header-scroll") {
    console.log("test");
    getHeaderForBackground.classList.add("header-scroll");
    }
    else {
    getHeaderForBackground.classList.remove("header-scroll");
}*/
}

// Namn och intersection funktionen
// Här skapas intersection. new Inter... måste innehålla funktionen och option för Intersection
const headerObserverTrigger = new IntersectionObserver(headerObserver, optionsHeaderObserver);

// intersection namnet.observe funktion + vad som ska observeras
headerObserverTrigger.observe(getHeroSection);


// Kevin Powell
/*
const heroSectionObserver = new IntersectionObserver
(function(
    entries, 
    heroSectionObserver
    ) {
    entries.forEach(change => {
        if (!change.isIntersecting) {
            console.log("lägg till");
            getHeaderForBackground.classList.add("header-scroll");
        } 
        else {
            getHeaderForBackground.classList.remove("header-scroll");
        }        
    });
},
options);

heroSectionObserver.observe(getHeroSection);
*/

