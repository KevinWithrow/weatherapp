var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var currentTemp = document.querySelector('.currentTemp');
var minTemp = document.querySelector('.minTemp');
var maxTemp = document.querySelector('.maxTemp');
var weatherIcon = document.querySelector('.weatherIcon');
var iconFile;

// fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
function myFunction() {
    document.getElementById("apiContent").style.display = "block";
  }


button.addEventListener('click',function(){
    // fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&ee7b6d1c9395bb3f062e8c21709d349e')
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=ee7b6d1c9395bb3f062e8c21709d349e')
.then(response => response.json())
.then(data => {
    var cityValue = data['name'];
    var currentTempValue = data['main']['temp'];
    var minValue = data['main']['temp_min'];
    var maxValue = data['main']['temp_max'];
    var weatherIcon = data['weather']['id'];

    city.innerHTML = cityValue;
    currentTemp.innerHTML = currentTempValue;
    minTemp.innerHTML = minValue;
    maxTemp.innerHTML = maxValue;

    if(id < 250){
        weatherIcon.src = '/img/thunderstorm.jpg'
    }
    else if (id < 350){
        weatherIcon.src = '/img/lightRain.jpg'
    }
    else if (id < 550){
        weatherIcon.src = '/img/rain.jpg'
    }
    else if (id < 650){
        weatherIcon.src = '/img/snow.jpg'
    }
    else if (id === 800){
        weatherIcon.src = '/img/clear.jpg'
    }
    else if (id > 800){
        weatherIcon.src = '/img/clouds.jpg'
    }

})
.catch(err => alert("Wrong city name!"))
});

