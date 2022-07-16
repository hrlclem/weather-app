let city = "Tokyo";
let tempC, tempMinC;
let dayOfWeek;
let measureUnit = "metric";
const weatherObj = {};

import { showDOM } from "./domFunctions.js";

async function apiFetch(){
    try {
        // Get Weather data on city
        const responseWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${measureUnit}&APPID=2960c833ed296c43d70fe42ddaf23cea`, {mode: 'cors'});
        const dataCity = await responseWeather.json();
 
            weatherObj.city =          dataCity.name;
            weatherObj.country =       dataCity.sys.country;
            weatherObj.lat =           dataCity.coord.lat;
            weatherObj.lon =           dataCity.coord.lon;
            weatherObj.tempC =         dataCity.main.temp;
            weatherObj.tempMinC =      dataCity.main.temp_min;
            weatherObj.tempF =         convertCtoF(tempC);
            weatherObj.tempMinF =      convertCtoF(tempMinC);
            weatherObj.weatherState =  checkWeatherState(dataCity.weather[0].id);
            weatherObj.humidity =      dataCity.main.humidity;
            weatherObj.windSpeed =     dataCity.wind.speed;
            weatherObj.plusOne =        [];
            weatherObj.plusTwo =        [];
            weatherObj.plusThree =      [];
            weatherObj.plusFour =       [];
            weatherObj.plusFive =       [];
            weatherObj.plusSix =        [];
            weatherObj.plusSeven =      [];

        // Get Weather for the week
        const responseWeekWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherObj.lat}&lon=${weatherObj.lon}&units=${measureUnit}&appid=2960c833ed296c43d70fe42ddaf23cea`, {mode: 'cors'});
        const dataWeek = await responseWeekWeather.json();

            weatherObj.plusOne[0] =     dataWeek.daily[0].temp.eve;
            weatherObj.plusOne[1] =     checkWeatherState(dataWeek.daily[0].weather[0].id);
            weatherObj.plusTwo[0] =     dataWeek.daily[1].temp.eve;
            weatherObj.plusTwo[1] =     checkWeatherState(dataWeek.daily[1].weather[0].id);
            weatherObj.plusThree[0] =   dataWeek.daily[2].temp.eve;
            weatherObj.plusThree[1] =   checkWeatherState(dataWeek.daily[2].weather[0].id);      
            weatherObj.plusFour[0] =    dataWeek.daily[3].temp.eve;
            weatherObj.plusFour[1] =    checkWeatherState(dataWeek.daily[3].weather[0].id);
            weatherObj.plusFive[0] =    dataWeek.daily[4].temp.eve;
            weatherObj.plusFive[1] =    checkWeatherState(dataWeek.daily[4].weather[0].id);
            weatherObj.plusSix[0] =     dataWeek.daily[5].temp.eve;
            weatherObj.plusSix[1] =     checkWeatherState(dataWeek.daily[5].weather[0].id);
            weatherObj.plusSeven[0] =   dataWeek.daily[6].temp.eve;
            weatherObj.plusSeven[1] =   checkWeatherState(dataWeek.daily[6].weather[0].id);

        // Get time data on city
        const responseTime = await fetch(`http://api.geonames.org/timezoneJSON?lat=${weatherObj.lat}&lng=${weatherObj.lon}&username=hrlclem`, {mode: 'cors'});
        const dataTime = await responseTime.json();

            weatherObj.sunrise =       formatTime(dataTime.sunrise);
            weatherObj.sunset =        formatTime(dataTime.sunset);
            weatherObj.date =          formatDate(dataTime.time);
            weatherObj.time =          formatTime(dataTime.time);


        showDOM();
        console.log("All good data!");

    } catch(error){
        console.log("Couldn't fetch data!")
    }
};





function checkInput(){
    let submitValue = document.getElementById("cityField").value;
    if (submitValue != "Tokyo"){
        weatherObj.city = submitValue;
        console.log(1 + weatherObj.city)        
        console.log(2 + submitValue)
        return weatherObj.city;
    }
}

function formatDate(date) {
    let year =  date.slice(2,4);
    let month = date.slice(5,7);
    // Get month name
        if (month == '01') {
            month = 'January';
        } else if (month == '02') {
            month = 'February';
        } else if (month == '03') {
            month = 'March';
        } else if (month == '04') {
            month = 'April';
        } else if (month == '05') {
            month = 'May';
        } else if (month == '06') {
            month = 'June';
        } else if (month == '07') {
            month = 'July';
        } else if (month == '08') {
            month = 'August';
        } else if (month == '09') {
            month = 'September';
        } else if (month == '10') {
            month = 'October';
        } else if (month == '11') {
            month = 'November';
        } else {
            month = 'December';
        };

    // Get day suffix
    let day = date.slice(8,10);
        let suffixDay;
        if (day.slice(-1) == '1') {
            suffixDay = 'st';
        } else if (day.slice(-1) == '2') {
            suffixDay = 'nd';
        } else if (day.slice(-1) == '3') {
            suffixDay = 'rd';
        } else {
            suffixDay = 'th';
        }
        
        if (day > 3 && day < 21) {
            suffixDay = 'th';
        }
        if (day < 10) {
            day = day.slice(1);
        };

    // Get day name
    dayOfWeek =     new Date().getDay();
    if (dayOfWeek == '1') {
        dayOfWeek = 'Monday';
      } else if (dayOfWeek == '2') {
        dayOfWeek = 'Tuesday';
      } else if (dayOfWeek == '3') {
        dayOfWeek = 'Wednesday';
      } else if (dayOfWeek == '4') {
        dayOfWeek = 'Thursday';
      } else if (dayOfWeek == '5') {
        dayOfWeek = 'Friday';
      } else if (dayOfWeek == '6') {
        dayOfWeek = 'Saturday';
      } else if (dayOfWeek == '7') {
        dayOfWeek = 'Sunday';
      };

    return `${dayOfWeek}, ${day}${suffixDay} ${month} '${year}`
}



function formatTime(time){
    let hour =   time.slice(11,13);
    let minute = time.slice(14,16);

    let suffixTime;

    // Get time suffix
    if (hour > 11) {
        suffixTime = 'pm';
      } else {
        suffixTime = 'am';
      }

    // Change time to AM-PM
    if (hour > 12) {
        hour -= 12;
    }

    if (hour < 10 && suffixTime === 'am') {
        hour = hour.slice(1, 2);
    }

    // Midngith set
    if (hour === '0') {
        hour = 12;
    }

    return `${hour}:${minute} ${suffixTime}`
}



function convertCtoF(temp){
    return (temp * 1.8) + 32;
}

function checkWeatherState(weatherId){
    if (weatherId >= 200 && weatherId <= 232){
        return "Thunderstorm";
    } else if (weatherId >= 300 && weatherId <= 321 || weatherId >= 500 && weatherId <= 531){
        return "Rain";
    } else if (weatherId >= 600 && weatherId <= 622){
        return "Snow";
    } else if (weatherId >= 700 && weatherId <= 781){
        return "Mist";
    } else if (weatherId == 800){
        return "Clear";
    } else if (800 == weatherId || 802 == weatherId){
        return "Few clouds"
    } else if (803 == weatherId || 804 == weatherId){
        return "Broken clouds"
    } else {
        return "Pending";
    }
};



// Export variables and functions
export {apiFetch, checkInput};
export {weatherObj};