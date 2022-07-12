import { apiFetch, checkInput } from "./apiFunctions.js";


apiFetch();

const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function(){
    checkInput();
    apiFetch();
});