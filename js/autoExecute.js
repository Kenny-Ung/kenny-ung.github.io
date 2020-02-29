"use strict";

const oPageFirst = document.querySelectorAll("body"),
    burger = document.querySelector(".burger"),
    oBtnA = document.getElementsByClassName(".closeMenu");

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

    // Menu burger
    var menu = document.getElementById("activeMenu");
    burger.addEventListener("click", () => {
        burger.classList.toggle("activeMenu");
    });

    if(menu == null) {
        burger.addEventListener("click", openMenu);
    } else if(menu != null) {
        burger.addEventListener("click", closeMenu);
    }

    for (let i = 0; i < oBtnA.length; i++) {
        oBtnA[i].addEventListener("click", () => {
            closeMenu();
        });
    }
})();