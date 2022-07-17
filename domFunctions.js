import { weatherObj, convertCtoF } from "./apiFunctions.js";

let tempDegree = "C";


async function showDOM(){
    await backgroundImg(weatherObj.weatherState);
    await weatherDisplay();
};


function weatherDisplay(){
    // leftPanel
    const weatherStateText = document.querySelector('.weatherState');
    const cityText =    document.querySelector('.city');
    const dateText =    document.querySelector('.date');
    const timeText =    document.querySelector('.time');
    const todayIcon =   document.querySelector('.todayIcon');
        weatherStateText.innerHTML = weatherObj.weatherState;
        cityText.innerHTML =    weatherObj.location;
        dateText.innerHTML =    weatherObj.date;
        timeText.innerHTML =    weatherObj.time;
        todayIcon.src =         weatherIcon(weatherObj.weatherState);
    
    // rightPanel
    const title1 =  document.querySelector('.title1');
    const icon1 =   document.querySelector('.icon1');
    const title2 =  document.querySelector('.title2');
    const icon2 =   document.querySelector('.icon2');
    const title3 =  document.querySelector('.title3');
    const icon3 =   document.querySelector('.icon3');
    const title4 =  document.querySelector('.title4');
    const icon4 =   document.querySelector('.icon4');
    const title5 =  document.querySelector('.title5');
    const icon5 =   document.querySelector('.icon5');
    const title6 =  document.querySelector('.title6');
    const icon6 =   document.querySelector('.icon6');
    const title7 =  document.querySelector('.title7');
    const icon7 =   document.querySelector('.icon7');
        title1.innerHTML =  weatherObj.plusOne[2];
        icon1.src =         weatherIcon(weatherObj.plusOne[1]);
        title2.innerHTML =  weatherObj.plusTwo[2];
        icon2.src =         weatherIcon(weatherObj.plusTwo[1]);
        title3.innerHTML =  weatherObj.plusThree[2];
        icon3.src =         weatherIcon(weatherObj.plusThree[1]);
        title4.innerHTML =  weatherObj.plusFour[2];
        icon4.src =         weatherIcon(weatherObj.plusFour[1]);
        title5.innerHTML =  weatherObj.plusFive[2];
        icon5.src =         weatherIcon(weatherObj.plusFive[1]);
        title6.innerHTML =  weatherObj.plusSix[2];
        icon6.src =         weatherIcon(weatherObj.plusSix[1]);
        title7.innerHTML =  weatherObj.plusSeven[2];
        icon7.src =         weatherIcon(weatherObj.plusSeven[1]);

    // bottomPanel
    const humidityValue =   document.querySelector('.humidityValue');
    const rainValue =       document.querySelector('.rainValue');
    const windValue =       document.querySelector('.windValue');
    const sunriseValue =    document.querySelector('.sunriseValue');
    const sunsetValue =     document.querySelector('.sunsetValue');
        humidityValue.innerHTML =   weatherObj.humidity;
        rainValue.innerHTML =       "Pending";
        windValue.innerHTML =       weatherObj.windSpeed;
        sunriseValue.innerHTML =    weatherObj.sunrise;
        sunsetValue.innerHTML =     weatherObj.sunset;


    if (tempDegree == "C"){
        // leftPanel
        const tempText =   document.querySelector('.tempDegree');
        tempText.innerHTML =   weatherObj.tempC + "°C";

        // rightPanel
        const temp1 =   document.querySelector('.temp1');
        const temp2 =   document.querySelector('.temp2');
        const temp3 =   document.querySelector('.temp3');
        const temp4 =   document.querySelector('.temp4');
        const temp5 =   document.querySelector('.temp5');
        const temp6 =   document.querySelector('.temp6');
        const temp7 =   document.querySelector('.temp7');
            temp1.innerHTML =   weatherObj.plusOne[0].toFixed(1) + "°C";
            temp2.innerHTML =   weatherObj.plusTwo[0].toFixed(1) + "°C";
            temp3.innerHTML =   weatherObj.plusThree[0].toFixed(1) + "°C";
            temp4.innerHTML =   weatherObj.plusFour[0].toFixed(1) + "°C";
            temp5.innerHTML =   weatherObj.plusFive[0].toFixed(1) + "°C";
            temp6.innerHTML =   weatherObj.plusSix[0].toFixed(1) + "°C";
            temp7.innerHTML =   weatherObj.plusSeven[0].toFixed(1) + "°C";

    } else if (tempDegree == "F"){
        // leftPanel
        const tempText =   document.querySelector('.tempDegree');
        tempText.innerHTML =   weatherObj.tempF + "°F";

        // rightPanel
        const temp1 =   document.querySelector('.temp1');
        const temp2 =   document.querySelector('.temp2');
        const temp3 =   document.querySelector('.temp3');
        const temp4 =   document.querySelector('.temp4');
        const temp5 =   document.querySelector('.temp5');
        const temp6 =   document.querySelector('.temp6');
        const temp7 =   document.querySelector('.temp7');
            temp1.innerHTML =   convertCtoF(weatherObj.plusOne[0]).toFixed(1) + "°F";
            temp2.innerHTML =   convertCtoF(weatherObj.plusTwo[0]).toFixed(1) + "°F";
            temp3.innerHTML =   convertCtoF(weatherObj.plusThree[0]).toFixed(1) + "°F";
            temp4.innerHTML =   convertCtoF(weatherObj.plusFour[0]).toFixed(1) + "°F";
            temp5.innerHTML =   convertCtoF(weatherObj.plusFive[0]).toFixed(1) + "°F";
            temp6.innerHTML =   convertCtoF(weatherObj.plusSix[0]).toFixed(1) + "°F";
            temp7.innerHTML =   convertCtoF(weatherObj.plusSeven[0]).toFixed(1) + "°F";
    }
};

// Weather icon function
function weatherIcon(weatherState){
    if(weatherState == "Thunderstorm"){
        return './src/icon/thunderstorm.svg'
    } else if (weatherState == "Rain"){
        return './src/icon/rain.svg'
    } else if (weatherState == "Snow"){
        return './src/icon/snow.svg'
    } else if (weatherState == "Mist"){
        return './src/icon/mist.svg'
    } else if (weatherState == "Clear"){
        return './src/icon/clearSky.svg'
    } else if (weatherState == "Few clouds"){
        return './src/icon/fewClouds.svg'
    } else if (weatherState == "Broken clouds"){
        return './src/icon/brokenClouds.svg'
    } else if (weatherState == "Pending"){
        return './src/icon/search.svg'
    }
}

// Background image function
function backgroundImg(weatherState){
    if(weatherState == "Thunderstorm"){
        document.body.style.backgroundImage = 'url(./src/img/thunderstorm.jpg)';
    } else if (weatherState == "Rain"){
        document.body.style.backgroundImage = 'url(./src/img/rain.jpg)';
    } else if (weatherState == "Snow"){
        document.body.style.backgroundImage = 'url(./src/img/snow.jpg)';
    } else if (weatherState == "Mist"){
        document.body.style.backgroundImage = 'url(./src/img/mist.jpg)';
    } else if (weatherState == "Clear"){
        document.body.style.backgroundImage = 'url(./src/img/clearSky.jpg)';
    } else if (weatherState == "Few clouds"){
        document.body.style.backgroundImage = 'url(./src/img/fewClouds.jpg)';
    } else if (weatherState == "Broken clouds"){
        document.body.style.backgroundImage = 'url(./src/img/brokenClouds.jpg)';
    } else if (weatherState == "Pending"){
        document.body.style.background = 'none'
        document.body.style.backgroundColor = 'grey';    }
}


// Change CtoF
function changeCtoF(){
    const toggleswitch = document.getElementById('toggleswitch');

    toggleswitch.addEventListener('change',function(){
        if(this.checked) {
            tempDegree = "F";
            weatherDisplay();
        } else {
            tempDegree = "C";
            weatherDisplay();
        }
    });
}




export {changeCtoF, backgroundImg, showDOM};