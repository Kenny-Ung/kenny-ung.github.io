"use strict";

const oPagePrincipal = document.getElementById("global"),
    oPage = document.getElementsByClassName("firstPage"),
    oProgressBar = document.getElementsByClassName("progress-bar"),
    oSmallPercent = document.getElementsByClassName("smallPercent"),
    oPercentLeft = document.getElementById("percentLeft"),
    oPercentRight = document.getElementById("percentRight"),
    oPercentMax = document.getElementById("percentMax"),
    oPercentTotal = document.getElementsByClassName("smallPercent"),
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
            oPercentTotal[0].style.display = "none";
            
            setTimeout(() => { 
                oPage[0].style.animation = "fadeout 1.5s";
                
                setTimeout(() => { 
                    oPage[0].style.display = "none";
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
            oSmallPercent[0].style.display = "flex";
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