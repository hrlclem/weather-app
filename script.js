import { apiFetch, checkInput } from "./apiFunctions.js";
import { backgroundImg, showDOM } from "./domFunctions.js";
import { weatherObj } from "./apiFunctions.js";

const loadPage = (() => {
    apiFetch()
        .then(showDOM());
})();


// By default run apiFetch + Dom



const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function(){
    checkInput();
    apiFetch()
        .then(showDOM());
    // Process dom functions
});
