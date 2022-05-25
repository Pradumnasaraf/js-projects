require('dotenv').config()
let API_KEY = process.env.WEATHER_API_KEY
let city = "patna"
function fetchWeather(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
    .then((respnses) => respnses.json())
    .then((data) => displayWeather(data));
};
function displayWeather(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = `http://openweathermap.org/img/w/${icon}.png`
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText ="Humidity: "+ humidity + "%";
    document.querySelector(".wind").innerText ="Wind Speed: " + speed + " km/h"
    document.querySelector(".weather").classList.remove("loading")
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?"+name+"')"
} 
function search(){
   cityName = document.querySelector(".search-bar").value;
   fetchWeather(cityName);
}
document.querySelector("#btn").addEventListener("click", function(){
    search();
})
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        search()
    }
})
fetchWeather("tokyo")