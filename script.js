let weather = {
    apiKey: "d3cb6446e150413b084200b323329758",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {description, icon} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,description,icon,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;  
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".temp").innerText = temp+"°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText= "Humidity: " + humidity+"%";
        document.querySelector(".wind").innerText = "Wind speeds: "+speed+" km/h";
        
    },
    search: function (){
      this.fetchWeather(document.querySelector(".search-bar").value);  
    }
};

document
    .querySelector(".search button")
    .addEventListener("click", function(){
        weather.search();
})