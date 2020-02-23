"use strict";

/*
 * Fonction exécutée lors du chargement de la page
 * @param aucun
 * @return true
 */

(function () {

    var oPageFirst = document.querySelectorAll("body");
    for (let i = 0; i < oPageFirst.length; i++) {
        oPageFirst[i].addEventListener("click", function() {
            afficherProgressBar();
        }, {once: true});
    }
    

})();