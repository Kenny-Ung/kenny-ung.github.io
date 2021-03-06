"use strict";

const oPagePrincipal = document.getElementById("global"),
    oPage = document.querySelector(".firstPage"),
    oProgressBar = document.getElementsByClassName("progress-bar"),
    oSmallPercent = document.querySelector(".smallPercent"),
    oPercentLeft = document.getElementById("percentLeft"),
    oPercentRight = document.getElementById("percentRight"),
    oPercentMax = document.getElementById("percentMax"),
    oPercentTotal = document.querySelector(".smallPercent"),
    menuMobile = document.querySelector(".menu-mobile"),
    bars = document.querySelector(".activeMenu");

/*
 * Fonction: afficherProgressBar
 * Les barres de progressions augmentent et les pourcentages
 * @param aucun
 * @return aucun
*/
function afficherProgressBar() {
     
    var counter = 0;
    var counterPercent = 0;
    var progress = 0;
    var id = setInterval(frame ,50)

    function frame(){
        if(counter == 47) {
            oPercentMax.style.display = "block";
            clearInterval(id);
            oPercentTotal.style.display = "none";
            
            setTimeout(() => { 
                oPage.style.animation = "fadeout 1.5s";
                
                setTimeout(() => { 
                    oPage.style.display = "none";
                    oPagePrincipal.style.animation = "fadein 1.5s";
                    oPagePrincipal.style.display = "block";
                }, 1000);
            }, 800);
        } 
        else {
            if(counter < 47) {
                counter += 1;
            }  
            counterPercent += 2.12;
            progress += 2.13;
            oSmallPercent.style.display = "flex";
            oPercentLeft.style.paddingLeft = counter + "%";
            oPercentLeft.innerHTML = Math.floor(counterPercent) + "%";
            oPercentRight.style.paddingRight = counter + "%"; 
            oPercentRight.innerHTML = Math.floor(counterPercent) + "%";
            oProgressBar[0].style.width = Math.floor(progress) + "%";
            oProgressBar[1].style.width = Math.floor(progress) + "%";
        }
    }  
}

/**
 * Fonction: openMenu
 * Ouvre le menu
 * @param aucun
 * @return aucun
 */
function openMenu() {
    menuMobile.style.animation = "openMenu 0.5s forwards";
}

/**
 * Fonction: closeMenu
 * Ferme le menu
 * @param aucun
 * @return aucun
 */
function closeMenu() {
    menuMobile.style.animation = "closeMenu 0.5s forwards";
}

/**
 * Fonction: scrollAnim
 * ----------------------
 * @param aucun
 * @return aucun
 */
function scrollAnim() {
    const heightSection = window.innerHeight,
        oH1Portfolio = document.querySelector("h1"),
        oLine = document.querySelector(".line"),
        oCard = document.getElementsByClassName("card"),
        oSkills = document.querySelector(".skills"),
        opHtml = document.querySelector(".pHtml"),
        opJs = document.querySelector(".pJs"),
        opC = document.querySelector(".pC"),
        opPhp = document.querySelector(".pPhp"),
        oBox = document.getElementsByClassName("box"),
        oCircle2 = document.getElementsByClassName("circle2"),
        oH2Contact = document.querySelector(".contactTitle"),
        oLine2 = document.querySelector(".line2"),
        oCIn = document.querySelector(".contactLinked"),
        oCGit = document.querySelector(".contactGit"),
        oCMail = document.querySelector(".contactMail"),
        oCollab = document.querySelector(".collab");

    //Page Home
    if (window.pageYOffset == heightSection) {
        
    }

    //Page Portfolio
    if (window.pageYOffset >= heightSection * 0.75) {
        oH1Portfolio.style.animation = "fadein 0.7s ease-in-out forwards";
        oLine.style.animation = "lineIncrease 0.7s 1s ease-in-out forwards";

        let i = 0;
        setInterval( () => {
            if (i < oCard.length) {
                oCard[i].style.animation = "up .7s ease-in-out forwards";
                i++;
            }
        }, 250);
    }

    //Page About
    if (window.pageYOffset >= heightSection * 1.75) {
        oSkills.style.animation = "fadein .7s ease-in-out forwards";
        opHtml.style.animation = "barIncrease1 .7s .7s ease-in-out forwards";
        opJs.style.animation = "barIncrease2 .7s .7s ease-in-out forwards";
        opC.style.animation = "barIncrease3 .7s .7s ease-in-out forwards";
        opPhp.style.animation = "barIncrease4 .7s .7s ease-in-out forwards";

        setTimeout(() => {
            opHtml.innerHTML = "90" + "%";
            opJs.innerHTML = "80" + "%";
            opC.innerHTML = "80" + "%";
            opPhp.innerHTML = "60" + "%";
        }, 1300);

        setTimeout(() => {
            let i = 0;
            setInterval( () => {
                if (i < oBox.length) {
                    oBox[i].style.animation = "up2 1s ease-in-out forwards";
                    i++;
                }
            }, 250);
        }, 1500);

        setTimeout(() => {
            oCircle2[0].style.animation = "circleIncrease 1s ease forwards";
            oCircle2[1].style.animation = "circleIncrease 1s ease forwards";
            oCircle2[2].style.animation = "circleIncrease 1s ease forwards";
        }, 2200);
    }

    //Page Contact
    if (window.pageYOffset >= heightSection * 2.75) {
        oH2Contact.style.animation = "fadein 0.7s ease-in-out forwards";
        oLine2.style.animation = "lineIncrease2 0.7s 0.7s ease-in-out forwards";

        setTimeout(() => {
            oCIn.style.animation = "fadein 0.7s 0.2s ease-in-out forwards";
            oCGit.style.animation = "fadein 0.7s 0.4s ease-in-out forwards";
            oCMail.style.animation = "fadein 0.7s 0.6s ease-in-out forwards";
        }, 1000);

        oCollab.style.animation = "fadein 0.7s 2s ease-in-out forwards";
    }
}