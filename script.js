import { apiFetch, checkInput } from "./apiFunctions.js";
import { showDOM } from "./domFunctions.js";
import { weatherObj } from "./apiFunctions.js";

const submitBtn = document.querySelector(".submitBtn");


const loadPage = (() => {
    apiFetch()
        .then(showDOM());
    console.log("loadPage: " + weatherObj);
})();

submitBtn.addEventListener("click", function(){
    checkInput();
    apiFetch()
        .then(showDOM());
    console.log("Click: " + weatherObj);
});
