//weather conditions
let condition = {
    clouds: ["few clouds", "scattered clouds", "broken clouds", "overcast clouds"],
    clear: ["clear sky"],
    snow: ["light snow", "snow", "heavy snow", "sleet", "light shower sleet", "shower sleet", "light rain and snow", "rain and snow", "light shower snow", "shower snow", "heavy shower snow"],
    rain: ["light rain", "moderate rain", "heavy intensity rain", "very heavy rain", "extreme rain", "freezing rain", "light intensity shower rain", "shower rain", "heavy intensity shower rain", "ragged shower rain"],
    drizzle: ["light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain", "shower rain and drizzle", "heavy shower rain and drizzle", "shower drizzle"],
    thunderstorm: ["thunderstorm with light rain", "thunderstorm with rain", "thunderstorm with heavy rain", "light thunderstorm", "thunderstorm", "heavy thunderstorm", "ragged thunderstorm", "thunderstorm with light drizzle", "thunderstorm with drizzle", "thunderstorm with heavy drizzle"],
    atmosphere: ["mist", "smoke", "haze", "fog", "dust", "volcanic ash"]
}


//wait for page to fully load
document.addEventListener('DOMContentLoaded', function(){

    let form = document.querySelector('.searchForm');
    let city;

    //fetching data from api
    form.addEventListener('submit', function(e){
        e.preventDefault()//stops page from reloading

        city = document.querySelector('.citysearch').value;
        
        //let city = "london";
        let apiKey = "a6bab93bb2226592ac9478b583f18669"
        fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.temp-num').innerHTML = Math.round(data.main.temp - 273.15) + "°C";
            document.querySelector('.temp-descript').innerHTML = data.weather[0].description;
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.feel-like').innerHTML = "feels like " + Math.round(data.main.feels_like - 273.25) + "°C";
            document.querySelector('.wind-value').innerHTML = Math.round((data.wind.speed*3.6)*100)/100 + " km/h";
            document.querySelector('.humidity-value').innerHTML = data.main.humidity + "%";
            document.querySelector('.pressure-value').innerHTML = data.main.pressure + " hPa";
            document.querySelector('.visibility-value').innerHTML = Math.round((data.visibility/1000)*100)/100 + " km";
    
            //weather icon
            let prntEl = document.querySelector('.temp-image');
            let apiDescript = data.weather[0].description;
    
            if(condition.clear.includes(apiDescript))
            {
                prntEl.innerHTML = `<i class="bx bx-sun" ></i>`;
            }
            else if(condition.clouds.includes(apiDescript))
            {
                prntEl.innerHTML = `<i class="bx bx-cloud-sun" ></i>`;
            }
           else if(condition.atmosphere.includes(apiDescript))
            {
                prntEl.innerHTML = `<i class="bx bx-cloud-fog" ></i>`;
            }
            else if(condition.drizzle.includes(apiDescript))
            {
                prntEl.innerHTML = `<i class="bx bx-cloud-drizzle" ></i>`;
            }
            else if(condition.rain.includes(apiDescript))
            {
                prntEl.innerHTML = `<i class="bx bx-cloud-rain-wind-alt" ></i>`;
            }
            else if(condition.snow.includes(apiDescript))
            {
                prntEl.innerHTML = `<i class="bx bx-snowflake" ></i>`;
            }
            else if(condition.thunderstorm.includes(apiDescript))
            {
                prntEl.innerHTML = `<i class="bx bx-cloud-lightning" ></i>`;
            }
        })
    })

    //setting time and date
    
    function updateClock() {

        const now = new Date();
        
        const timeString = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit', 
            //second: '2-digit', // Added seconds so you can see it moving
            hour12: true 
        });

        document.querySelector('.time').innerHTML = timeString;
        document.querySelector('.date').innerHTML = now.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Run the function once immediately so it doesn't wait 1 second to start
    updateClock();

    // Then run it every 1000ms (1 second)
    setInterval(updateClock, 1000);



})