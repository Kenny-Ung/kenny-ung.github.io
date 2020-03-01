"use strict";

const oPagePrincipal = document.getElementById("global"),
    oPage = document.querySelector(".firstPage"),
    oProgressBar = document.getElementsByClassName("progress-bar"),
    oSmallPercent = document.querySelector(".smallPercent"),
    oPercentLeft = document.getElementById("percentLeft"),
    oPercentRight = document.getElementById("percentRight"),
    oPercentMax = document.getElementById("percentMax"),
    oPercentTotal = document.querySelector(".smallPercent"),
    menu = document.querySelector(".menu-mobile");

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
    menu.style.animation = "openMenu 0.5s forwards";
}

/**
 * Fonction: closeMenu
 * Ferme le menu
 * @param aucun
 * @return aucun
 */
function closeMenu() {
    menu.style.animation = "closeMenu 0.5s forwards";
}

/**
 * Fonction: scrollAnim
 * ----------------------
 * @param aucun
 * @return aucun
 */
function scrollAnim() {
    const heightSection = window.innerHeight,
        oSkills = document.querySelector(".skills"),
        opHtml = document.querySelector(".pHtml"),
        opJs = document.querySelector(".pJs"),
        opC = document.querySelector(".pC"),
        opPhp = document.querySelector(".pPhp");


    //Page Home
    if (window.pageYOffset <= heightSection) {

    }

    //Page Portfolio
    if (window.pageYOffset == heightSection * 1) {

    }

    //Page About
    if (window.pageYOffset == heightSection * 2) {
        oSkills.style.animation = "appear .8s ease-in-out forwards";
        opHtml.innerHTML = "90" + "%";
        opHtml.style.animation = "barIncrease1 .8s .8s ease-in-out forwards";
        opJs.innerHTML = "80" + "%";
        opJs.style.animation = "barIncrease2 .8s .8s ease-in-out forwards";
        opC.innerHTML = "80" + "%";
        opC.style.animation = "barIncrease3 .8s .8s ease-in-out forwards";
        opPhp.innerHTML = "60" + "%";
        opPhp.style.animation = "barIncrease4 .8s .8s ease-in-out forwards";
    }

    //Page Contact
    if (window.pageYOffset == heightSection * 3) {
    }
}