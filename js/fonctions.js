"use strict";

/*
 * Fonction: afficherProgressBar
 * Les barres de progressions augmentent et les pourcentages
 * @param aucun
 * @return aucun
*/
function afficherProgressBar() {
    var oPagePrincipal = document.getElementById("global");
    var oPage = document.getElementsByClassName("firstPage");
    var oProgressBar = document.getElementsByClassName("progress-bar");
    var oSmallPercent = document.getElementsByClassName("smallPercent");
    var oPercentLeft = document.getElementById("percentLeft");
    var oPercentRight = document.getElementById("percentRight");
    var oPercentMax = document.getElementById("percentMax");
    var oPercentTotal = document.getElementsByClassName("smallPercent");
    var counter = 0;
    var counterPercent = 0;
    var progress = 0;
    var id = setInterval(frame ,50)

    function frame(){
        if(counter == 47) {
            oPercentMax.style.display = "block";
            clearInterval(id);
            oPercentTotal[0].style.display = "none";
            
            setTimeout(function(){ 
                oPage[0].style.animation = "fadeout 1.5s";
                
                setTimeout(function(){ 
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

/*
 * Fonction: closeMenu
 * Les barres de progressions augmentent et les pourcentages
 * @param aucun
 * @return aucun
*/
function aCloseMenu() {
    var MenuMobile = document.querySelector(".menu-mobile");

    MenuMobile.style.left = 0 + "%";
    console.log("2")
    setTimeout(function() {
        MenuMobile.style.left = 100 + "%";
    }, 500);
}