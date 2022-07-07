let city, country, date, time, temp, weatherState, humidity, chanceofRain, windSpeed, sunrise, sunset;

async function apiFetch(){
    let city = document.getElementById("cityField").value;
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2960c833ed296c43d70fe42ddaf23cea`, {mode: 'cors'});
        const dataCity = await response.json();
        console.log(dataCity.data.images.original.url);
    } catch(error){
        console.log("Couldn't fetch data!")
    }
};