# Weather App 🌤️

A simple, fast weather lookup app — search any city and instantly see current conditions, including temperature, wind, humidity, pressure, and visibility, with a weather icon that updates to match real-time conditions.

🔗 **Live Demo:** https://jry-weather-app.netlify.app/

## Features

- 🔍 Search current weather by city name
- 🌡️ Current temperature and "feels like" temperature (°C)
- 💨 Wind speed, humidity, atmospheric pressure, and visibility
- 🖼️ Weather icon that changes based on real-time conditions (clear, clouds, rain, drizzle, snow, thunderstorm, fog/mist)
- 🕒 Live clock and date display, updating every second

## Built With

- HTML5
- CSS3
- JavaScript (vanilla — no frameworks)
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data
- [Boxicons](https://boxicons.com/) for weather icons
- Deployed on [Netlify](https://www.netlify.com/)

## How It Works

1. The user types a city name into the search form and submits it.
2. The app fetches current weather data for that city from the OpenWeatherMap API.
3. Temperature, "feels like" temperature, wind speed, humidity, pressure, and visibility are parsed from the response and displayed on the page.
4. The weather description returned by the API is matched against a set of condition categories (clear, clouds, rain, drizzle, snow, thunderstorm, atmosphere) to choose the matching icon.
5. A separate clock function keeps the time and date updated every second, independent of the weather search.

## Running Locally

```bash
git clone https://github.com/Jerryart42/Weather-App.git
cd Weather-App
```

Then just open `index.html` in your browser — no build step or install required.

## Roadmap / Possible Improvements

- Add error handling for invalid or misspelled city names
- Add a 5-day forecast view
- Support geolocation to auto-detect the user's current city
- Move the API key behind a backend/serverless function instead of the client-side script

## Author

**Jerry Modiba**
GitHub: [@Jerryart42](https://github.com/Jerryart42)
