const API_KEY = "798eb73a77a92e167f09bbc515be4e31"

function onGeoOk(position){
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        const temp = document.querySelector("#weather span:nth-child(3)");
        temp.innerText = `기온: ${Math.round(data.main.temp*10)/10}°C`;
        const weather = document.querySelector("#weather span:nth-child(2)");
        weather.innerText = `날씨: ${data.weather[0].description}`;
        const humidity = document.querySelector("#weather span:last-child");
        humidity.innerText = `습도: ${data.main.humidity}%`;
    });
}

function OnGeoError(){
    alert("Can't find your current location");
}

navigator.geolocation.getCurrentPosition(onGeoOk,OnGeoError);

