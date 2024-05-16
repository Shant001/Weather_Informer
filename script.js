const apiKey = "01102bc8d14994ca84f43d2801c10219";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".percent").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";        
            
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "img/images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weathericon.src = "img/images/clear.png";
        }else if(data.weather[0].main == "Mist"){
            weathericon.src = "img/images/mist.png";
        }else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "img/images/drizzle.png";
        }else if(data.weather[0].main == "Rain"){
            weathericon.src = "img/images/rain.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
        
}

    searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});