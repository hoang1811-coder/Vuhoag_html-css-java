const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: ""
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: ""
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: ""
    }
};

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const errorMsg = document.getElementById("errorMsg");

searchBtn.addEventListener("click", function() {
    const city = cityInput.value.trim();
    if (weatherData.hasOwnProperty(city)) {
        const data = weatherData[city];
        cityName.textContent = city;
        description.textContent = data.description;
        temperature.textContent = `Nhiệt độ: ${data.temperature}°C`;
        humidity.textContent = `Độ ẩm: ${data.humidity}%`;
        windSpeed.textContent = `Tốc độ gió: ${data.windSpeed} km/h`;
        weatherInfo.style.display = "block";
        errorMsg.style.display = "none";
    } else {
        weatherInfo.style.display = "none";
        errorMsg.style.display = "block";
    }
});