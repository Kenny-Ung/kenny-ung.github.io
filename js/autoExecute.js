"use strict";

const oPageFirst = document.querySelectorAll("body"),
    burger = document.querySelector(".burger"),
    burgerClose = document.querySelector(".burgerClose"),
    oBtnA = document.getElementsByClassName("closeMenu"),
    scroll = document.getElementById("scroll"),
    scrollMe = document.getElementById("scrollMe");

/*
 * Fonction exécutée lors du chargement de la page
 * @param aucun
 * @return true
 */

(function () {
    // Loading
    for (let i = 0; i < oPageFirst.length; i++) {
        oPageFirst[i].addEventListener("click", () => {
            afficherProgressBar();
        }, {once: true});
    }

    // Scroll indicator
    scroll.addEventListener("click", () => {
        location.hash = "#portfolio";
    });

    scroll.addEventListener("mouseover", () => {
        scrollMe.style.animation = "fadein 1s ease-in-out forwards";
    });
    
    //Burger and burgerClose
    burger.addEventListener("click", openMenu);
    burgerClose.addEventListener("click", closeMenu);

    // Menu nav burger
    for (let i = 0; i < oBtnA.length; i++) {
        oBtnA[i].addEventListener("click", () => {
            closeMenu();
            //console.log("2")
        });
    }

    // Scroll page animation
    window.addEventListener("scroll", scrollAnim);
})();