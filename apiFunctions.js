let dayOfWeek;
let measureUnit = "metric";
const weatherObj = {city : "Tokyo"};

import { showDOM } from "./domFunctions.js";

async function apiFetch(){
    try {
        // Get Weather data on city
        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherObj.city}&units=${measureUnit}&APPID=2960c833ed296c43d70fe42ddaf23cea`, {mode: 'cors'});
        const dataCity = await responseWeather.json();
 
            weatherObj.city =          dataCity.name;
            weatherObj.country =       dataCity.sys.country;
            weatherObj.location =      locationOutput(weatherObj.city, weatherObj.country);
            weatherObj.lat =           dataCity.coord.lat;
            weatherObj.lon =           dataCity.coord.lon;
            weatherObj.tempC =         dataCity.main.temp.toFixed(1);
            weatherObj.tempF =         convertCtoF(weatherObj.tempC).toFixed(1);
            weatherObj.weatherState =  checkWeatherState(dataCity.weather[0].id);
            weatherObj.humidity =      dataCity.main.humidity + "%";
            weatherObj.windSpeed =     dataCity.wind.speed + " km/h";
            weatherObj.plusOne =       [];
            weatherObj.plusTwo =       [];
            weatherObj.plusThree =     [];
            weatherObj.plusFour =      [];
            weatherObj.plusFive =      [];
            weatherObj.plusSix =       [];
            weatherObj.plusSeven =     [];

        // Get Weather for the week
        const responseWeekWeather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherObj.lat}&lon=${weatherObj.lon}&units=${measureUnit}&appid=2960c833ed296c43d70fe42ddaf23cea`, {mode: 'cors'});
        const dataWeek = await responseWeekWeather.json();

            weatherObj.plusOne[0] =     dataWeek.daily[0].temp.eve;
            weatherObj.plusOne[1] =     checkWeatherState(dataWeek.daily[0].weather[0].id);
            weatherObj.plusOne[2] =     nextDate(1);

            weatherObj.plusTwo[0] =     dataWeek.daily[1].temp.eve;
            weatherObj.plusTwo[1] =     checkWeatherState(dataWeek.daily[1].weather[0].id);
            weatherObj.plusTwo[2] =     nextDate(2);

            weatherObj.plusThree[0] =   dataWeek.daily[2].temp.eve;
            weatherObj.plusThree[1] =   checkWeatherState(dataWeek.daily[2].weather[0].id);  
            weatherObj.plusThree[2] =   nextDate(3);
            
            weatherObj.plusFour[0] =    dataWeek.daily[3].temp.eve;
            weatherObj.plusFour[1] =    checkWeatherState(dataWeek.daily[3].weather[0].id);
            weatherObj.plusFour[2] =    nextDate(4);

            weatherObj.plusFive[0] =    dataWeek.daily[4].temp.eve;
            weatherObj.plusFive[1] =    checkWeatherState(dataWeek.daily[4].weather[0].id);
            weatherObj.plusFive[2] =    nextDate(5);

            weatherObj.plusSix[0] =     dataWeek.daily[5].temp.eve;
            weatherObj.plusSix[1] =     checkWeatherState(dataWeek.daily[5].weather[0].id);
            weatherObj.plusSix[2] =    nextDate(6);

            weatherObj.plusSeven[0] =   dataWeek.daily[6].temp.eve;
            weatherObj.plusSeven[1] =   checkWeatherState(dataWeek.daily[6].weather[0].id);
            weatherObj.plusSeven[2] =   nextDate(0);


        // Get time data on city        
        const responseTime = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=1eb5cb427b64474d845b7b10dbce6187&location=${weatherObj.city}`, {mode: 'cors'});
        const dataTime = await responseTime.json();

            weatherObj.date =          formatDate(dataTime.datetime);
            weatherObj.time =          formatTime(dataTime.datetime);

            
        // Get sunrise/sunset data on city        
        const responseSun = await fetch(`https://api.ipgeolocation.io/astronomy?apiKey=5b94f0e8e1954916bbc3cd0ad54d5e16&location=${weatherObj.city}`, {mode: 'cors'});
        const sunTime = await responseSun.json();

            weatherObj.sunrise =         sunTime.sunrise + " AM";
            weatherObj.sunset =          sunTime.sunset + " PM";;
        
        showDOM();

        // Hide loader
        document.querySelector(".loader-wrapper").style.display = "none";

        console.log("All good data!");
        return;
    } catch(error){
        console.log("Couldn't fetch data!")
        return;

    }
};




function locationOutput(city, country){
    return city + ", " + country;
}

function checkInput(){
    let submitValue = document.getElementById("cityField").value;
    if (submitValue == "" || submitValue == " "){
        alert("Please input a city first!")
    } else{
        weatherObj.city = submitValue;
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
      } else if (dayOfWeek == '0') {
        dayOfWeek = 'Sunday';
      };

    return `${dayOfWeek}, ${day}${suffixDay} ${month} '${year}`
};

function nextDate(dayCount){
        dayOfWeek =  new Date().getDay();
        let targetDate = dayOfWeek + dayCount;

        if (targetDate == 8){
            targetDate = 1;
        }

        if (targetDate == '2') {
            targetDate = 'Tuesday';
          } else if (targetDate == '3') {
            targetDate = 'Wednesday';
          } else if (targetDate == '4') {
            targetDate = 'Thursday';
          } else if (targetDate == '5') {
            targetDate = 'Friday';
          } else if (targetDate == '6') {
            targetDate = 'Saturday';
          } else if (targetDate == '7') {
            targetDate = 'Sunday';
          } else if (targetDate == '1') {
            targetDate = 'Monday';
          };
          return targetDate;
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
};


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
    } else if (801 == weatherId || 802 == weatherId){
        return "Few clouds"
    } else if (803 == weatherId || 804 == weatherId){
        return "Broken clouds"
    } else {
        return "Pending";
    }
};



// Export variables and functions
export {apiFetch, checkInput, convertCtoF};
export {weatherObj};