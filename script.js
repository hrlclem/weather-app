import { apiFetch, checkInput } from "./apiFunctions.js";
import { backgroundImg } from "./domFunctions.js";
import {weatherPlusOne, weatherPlusTwo, weatherPlusThree, weatherPlusFour, weatherPlusFive, weatherPlusSix, weatherPlusSeven} from "./apiFunctions.js";
import {tempPlusOne, tempPlusTwo, tempPlusThree, tempPlusFour, tempPlusFive, tempPlusSix, tempPlusSeven} from "./apiFunctions.js";
import {city, tempC, tempF, weatherState, humidity, windSpeed, date, time, dayOfWeek, sunrise, sunset, measureUnit} from "./apiFunctions.js";

apiFetch();

// By default run apiFetch + Dom

const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function(){
    checkInput();
    apiFetch();
    backgroundImg(weatherState);
    // Process dom functions
});