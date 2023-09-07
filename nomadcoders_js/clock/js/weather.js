const API_KEY = '7114c6365694ba4067b81c4586820717'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log('You live in', lat, lng)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url);
}

function onGeoError(){
    const lat = 37.413294
    const lng = 126.9779692
    console.log('You live in', lat, lng)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector('#weather span:first-child')
            const city = document.querySelector('#weather span:nth-child(2)')

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

            
        }
    );
    

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)