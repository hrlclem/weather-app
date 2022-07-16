import { apiFetch, checkInput } from "./apiFunctions.js";
import { showDOM } from "./domFunctions.js";
import { weatherObj } from "./apiFunctions.js";

const searchIcon = document.querySelector(".searchIcon");

const loadPage = (() => {
    apiFetch()
        .then(showDOM());
    return;
})();

window.onkeypress = function(event) {
    if (event.keyCode == 13) {
         checkInput();
         apiFetch()
             .then(showDOM());
         console.log(weatherObj);
         return;
     }
 return;
 };

 searchIcon.addEventListener("click", function(){
    checkInput();
    apiFetch()
        .then(showDOM());
    console.log(weatherObj);
    return;
});
