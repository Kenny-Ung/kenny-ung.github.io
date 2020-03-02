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
    //bars.removeAttribute("animation");
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
        oSkills = document.querySelector(".skills"),
        opHtml = document.querySelector(".pHtml"),
        opJs = document.querySelector(".pJs"),
        opC = document.querySelector(".pC"),
        opPhp = document.querySelector(".pPhp");


    //Page Home
    if (window.pageYOffset <= heightSection) {

    }

    //Page Portfolio
    if (window.pageYOffset == heightSection * 0.75) {

    }

    //Page About
    if (window.pageYOffset == heightSection * 2) {
        oSkills.style.animation = "appear .8s ease-in-out forwards";
        opHtml.style.animation = "barIncrease1 .8s .8s ease-in-out forwards";
        opJs.style.animation = "barIncrease2 .8s .8s ease-in-out forwards";
        opC.style.animation = "barIncrease3 .8s .8s ease-in-out forwards";
        opPhp.style.animation = "barIncrease4 .8s .8s ease-in-out forwards";

        setTimeout(() => {
            opHtml.innerHTML = "90" + "%";
            opJs.innerHTML = "80" + "%";
            opC.innerHTML = "80" + "%";
            opPhp.innerHTML = "60" + "%";
        }, 1300);
    }

    //Page Contact
    if (window.pageYOffset == heightSection * 3) {

    }
}