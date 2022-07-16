import { weatherObj } from "./apiFunctions.js";


// Background image function
function backgroundImg(weatherState){
    if(weatherState == "Thunderstorm"){
        document.body.style.backgroundImage = 'url(./src/img/thunderstorm.jpg)';
        // console.log("- Thunder")

    } else if (weatherState == "Rain"){
        document.body.style.backgroundImage = 'url(./src/img/rain.jpg)';
        // console.log("- Rain")

    } else if (weatherState == "Snow"){
        document.body.style.backgroundImage = 'url(./src/img/snow.jpg)';
        // console.log("- Snow")

    } else if (weatherState == "Mist"){
        document.body.style.backgroundImage = 'url(./src/img/mist.jpg)';
        // console.log("- Mist")

    } else if (weatherState == "Clear"){
        document.body.style.backgroundImage = 'url(./src/img/clearSky.jpg)';
        // console.log("- Clear")

    } else if (weatherState == "Few clouds"){
        document.body.style.backgroundImage = 'url(./src/img/fewClouds.jpg)';
        // console.log("- FC")

    } else if (weatherState == "Broken clouds"){
        document.body.style.backgroundImage = 'url(./src/img/brokenClouds.jpg)';
        // console.log("- BC")

    } else if (weatherState == "Pending"){
        document.body.style.background = 'none'
        document.body.style.backgroundColor = 'grey';
        // console.log("- Pending")

    }

    console.log("Background running");
}

function showDOM(){
    todaysWeather();
    backgroundImg(weatherObj.weatherState)
};

function todaysWeather(){
    const weatherStateText = document.querySelector('.weatherState');
    // weatherStateText.innerHTML = weatherState;
}

export {backgroundImg, showDOM};

// // Data function
// import



// export { backgroundImage };