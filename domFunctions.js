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
        document.body.style.backgroundColor = 'lightgrey';
    }
}

export {backgroundImg};

// // Data function
// import

// function backgroundImage(){
    
// };

// export { backgroundImage };