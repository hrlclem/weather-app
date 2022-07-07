let city, country, date, timezone, time, temp, weatherState, humidity, windSpeed, sunrise, sunset;
let measureUnit = "metric";

async function apiFetch(){
    // city = document.getElementById("cityField").value;
    city = "tokyo";
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${measureUnit}&APPID=2960c833ed296c43d70fe42ddaf23cea`, {mode: 'cors'});
        const dataCity = await response.json();

        city =          dataCity.name;
        country =       dataCity.sys.country;
        sunrise =       dataCity.sys.sunrise;
        sunset =        dataCity.sys.sunset;
        timezone =      dataCity.timezone;
        time =          dataCity.dt;
        date =          new Date(time * 1000);
        tempC =         dataCity.main.temp;
        weatherState =  dataCity.weather[0].main;
        humidity =      dataCity.main.humidity;
        windSpeed =     dataCity.wind.speed;

        console.log("city: " + city);
        console.log("country: " + country);
        console.log(" ");
        console.log("timezone: " + timezone);
        console.log("date: " + date);
        console.log("time: " + time);
        console.log(" ");

        console.log("tempF: " + tempC +"°C");
        console.log("weatherState: " + weatherState);
        console.log("humidity: " + humidity + "%");
        console.log("windSpeed: " + windSpeed + "km/h");
        console.log("sunrise: " + sunrise);
        console.log("sunset: " + sunset);
    } catch(error){
        console.log("Couldn't fetch data!")
    }
};

apiFetch();
// calcTime(timezone); 

// function calcTime(offset) {
//     // create Date object for current location
//     let d = new Date();

//     let utc = d.getTime() + (d.getTimezoneOffset() * 60000);

//     // create new Date object for different city
//     // using supplied offset
//     let nd = new Date(utc + (3600000 * offset));

//     // return time as a string
//     console.log("TIME:" + nd);
// }

// Function to get time
// Function to get date
// Function to get temperature C and F
