import { apiFetch, checkInput, weatherObj } from "./apiFunctions.js";
import { showDOM, changeCtoF } from "./domFunctions.js";

const searchIcon = document.querySelector(".searchIcon");

const loadPage = (() => {
    displayAllElements();
    return;
})();

// On "Enter" press
window.onkeypress = function(event) {
    if (event.keyCode == 13) {
        checkInput();
        displayAllElements();
        return;
     }
 return;
 };

// On button click
searchIcon.addEventListener("click", function(){
    checkInput();
    displayAllElements();
    return;
});

async function displayAllElements(){
    await apiFetch();
    await showDOM();
    await changeCtoF();
}