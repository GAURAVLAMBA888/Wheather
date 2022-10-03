
let weather = {
    apiKey : "f3ab9ac03e80fe0b6270a5ee4736360c",
    fetchWeather : function( city ){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){
        const { name } = data;
        const { humidity, temp } = data.main;
        const { description, icon } = data.weather[0];
        const { speed } = data.wind;

        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".temp").innerText = `${temp}°C`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".desc").innerText = description;
        document.querySelector(".humidity").innerText = `Humidity : ${humidity}%`;
        document.querySelector(".wind-speed").innerText = `Wind Speed : ${speed} m/s`;
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"}')";
    },
    search : function() {
        const city = document.querySelector(".search-input").value;
        this.fetchWeather(city);
    }
}

document.querySelector(".search-icon").addEventListener( "click", function(){
    weather.search();
})

document.querySelector(".search-input").addEventListener( "keyup", function(){
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Bangalore");