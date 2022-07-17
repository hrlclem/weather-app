import { apiFetch, checkInput, weatherObj } from "./apiFunctions.js";
import { showDOM, changeCtoF } from "./domFunctions.js";

const searchIcon = document.querySelector(".searchIcon");

const loadPage = (() => {
    apiFetch();
    showDOM();
    changeCtoF();
    return;
})();


// On "Enter" press
window.onkeypress = function(event) {
    if (event.keyCode == 13) {
         checkInput();
         apiFetch();
         showDOM();
         console.log(weatherObj);
         return;
     }
 return;
 };

// On button click
searchIcon.addEventListener("click", function(){
    checkInput();
    apiFetch();
    showDOM();
    return;
});
