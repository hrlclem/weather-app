import { weatherObj } from "./apiFunctions.js";


function showDOM(){
    weatherDisplay();
    backgroundImg(weatherObj.weatherState);
};


function weatherDisplay(){
    // leftPanel
    const weatherStateText = document.querySelector('.weatherState');
    const cityText =    document.querySelector('.city');
    const dateText =    document.querySelector('.date');
    const timeText =    document.querySelector('.time');
    const tempCText =   document.querySelector('.tempC');
    const todayIcon =   document.querySelector('.todayIcon');
        weatherStateText.innerHTML = weatherObj.weatherState;
        cityText.innerHTML =    weatherObj.location;
        dateText.innerHTML =    weatherObj.date;
        timeText.innerHTML =    weatherObj.time;
        tempCText.innerHTML =   weatherObj.tempC;
        todayIcon.src =         weatherIcon(weatherObj.weatherState);

    // // rightPanel
    // const title1 =  document.querySelector('.title1');
    // const temp1 =   document.querySelector('.temp1');
    // const icon1 =   document.querySelector('.icon1');
    //     title1.innerHTML =  weatherObj.plusOne[2];
    //     temp1.innerHTML =   weatherObj.plusOne[0];
    //     icon1.src =         weatherIcon(weatherObj.plusOne[1]);
    // const title2 =  document.querySelector('.title2');
    // const temp2 =   document.querySelector('.temp2');
    // const icon2 =   document.querySelector('.icon2');
    //     title2.innerHTML =  weatherObj.plusTwo[2];
    //     temp2.innerHTML =   weatherObj.plusTwo[0];
    //     icon2.src =         weatherIcon(weatherObj.plusTwo[1]);
    // const title3 =  document.querySelector('.title3');
    // const temp3 =   document.querySelector('.temp3');
    // const icon3 =   document.querySelector('.icon3');
    //     title3.innerHTML =  weatherObj.plusThree[2];
    //     temp3.innerHTML =   weatherObj.plusThree[0];
    //     icon3.src =         weatherIcon(weatherObj.plusThree[1]);
    // const title4 =  document.querySelector('.title4');
    // const temp4 =   document.querySelector('.temp4');
    // const icon4 =   document.querySelector('.icon4');
    //     title4.innerHTML =  weatherObj.plusFour[2];
    //     temp4.innerHTML =   weatherObj.plusFour[0];
    //     icon4.src =         weatherIcon(weatherObj.plusFour[1]);
    // const title5 =  document.querySelector('.title5');
    // const temp5 =   document.querySelector('.temp5');
    // const icon5 =   document.querySelector('.icon5');
    //     title5.innerHTML =  weatherObj.plusFive[2];
    //     temp5.innerHTML =   weatherObj.plusFive[0];
    //     icon5.src =         weatherIcon(weatherObj.plusFive[1]);
    // const title6 =  document.querySelector('.title6');
    // const temp6 =   document.querySelector('.temp6');
    // const icon6 =   document.querySelector('.icon6');
    //     title6.innerHTML =  weatherObj.plusSix[2];
    //     temp6.innerHTML =   weatherObj.plusSix[0];
    //     icon6.src =         weatherIcon(weatherObj.plusSix[1]);
    // const title7 =  document.querySelector('.title7');
    // const temp7 =   document.querySelector('.temp7');
    // const icon7 =   document.querySelector('.icon7');
    //     title7.innerHTML =  weatherObj.plusSeven[2];
    //     temp7.innerHTML =   weatherObj.plusSeven[0];
    //     icon7.src =         weatherIcon(weatherObj.plusSeven[1]);



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
}

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
        console.log("- Thunder")

    } else if (weatherState == "Rain"){
        document.body.style.backgroundImage = 'url(./src/img/rain.jpg)';
        console.log("- Rain")

    } else if (weatherState == "Snow"){
        document.body.style.backgroundImage = 'url(./src/img/snow.jpg)';
        console.log("- Snow")

    } else if (weatherState == "Mist"){
        document.body.style.backgroundImage = 'url(./src/img/mist.jpg)';
        console.log("- Mist")

    } else if (weatherState == "Clear"){
        document.body.style.backgroundImage = 'url(./src/img/clearSky.jpg)';
        console.log("- Clear")

    } else if (weatherState == "Few clouds"){
        document.body.style.backgroundImage = 'url(./src/img/fewClouds.jpg)';
        console.log("- FC")

    } else if (weatherState == "Broken clouds"){
        document.body.style.backgroundImage = 'url(./src/img/brokenClouds.jpg)';
        console.log("- BC")

    } else if (weatherState == "Pending"){
        document.body.style.background = 'none'
        document.body.style.backgroundColor = 'grey';
        console.log("- Pending")
    }
}




export {backgroundImg, showDOM};