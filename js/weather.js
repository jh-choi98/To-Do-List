const API_KEY = "44b1817c9fc824e9adb873d30b6607d4"
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        city.innerText = `@ ${data.name}`;
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}℃`;
    });
}

function onGeoError() {
    city.innerText = "city & weather: N/A";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);