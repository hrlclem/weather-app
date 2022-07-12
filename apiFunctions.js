let city = "Tokyo", country;
let lat, lon;
let tempC, tempF, weatherState, humidity, windSpeed;
let date, time, dayOfWeek;
let sunrise, sunset;
let measureUnit = "metric";

async function apiFetch(){

    try {
        // Get Weather data on city
        const responseWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${measureUnit}&APPID=2960c833ed296c43d70fe42ddaf23cea`, {mode: 'cors'});
        const dataCity = await responseWeather.json();

        city =          dataCity.name;
        country =       dataCity.sys.country;
        lat =           dataCity.coord.lat;
        lon =           dataCity.coord.lon;
        tempC =         dataCity.main.temp;
        tempF =         convertCtoF(tempC);
        weatherState =  dataCity.weather[0].main;
        humidity =      dataCity.main.humidity;
        windSpeed =     dataCity.wind.speed;

        console.log(dataCity);

        // Get time data on city
        const responseTime = await fetch(`http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=hrlclem`, {mode: 'cors'});
        const dataTime = await responseTime.json();

        sunrise =       formatTime(dataTime.sunrise);
        sunset =        formatTime(dataTime.sunset);
        date =          formatDate(dataTime.time);
        time =          formatTime(dataTime.time)

        console.log("All good data!")


    } catch(error){
        console.log("Couldn't fetch data!")
    }
};


function checkInput(){
    let submitValue = document.getElementById("cityField").value;
    if (submitValue != "Tokyo"){
        city = submitValue;
    }
}

export {apiFetch, checkInput};
export {city, tempC, tempF, weatherState, humidity, windSpeed, date, time, dayOfWeek, sunrise, sunset, measureUnit};


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
            dayOfWeek = 'June';
        } else if (month == '07') {
            month = 'July';
        } else if (month == '08') {
            month = 'August';
        } else if (month == '09') {
            month = 'September';
        } else if (month == '10') {
            dayOfWeek = 'October';
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
