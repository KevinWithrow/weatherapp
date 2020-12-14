var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var city = document.querySelector('.city');
var currentTemp = document.querySelector('.currentTemp');
var minTemp = document.querySelector('.minTemp');
var maxTemp = document.querySelector('.maxTemp');

// fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')

button.addEventListener('click',function(){
    // fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&ee7b6d1c9395bb3f062e8c21709d349e')
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=ee7b6d1c9395bb3f062e8c21709d349e')
.then(response => response.json())
.then(data => {
    var cityValue = data['name'];
    var currentTempValue = data['main']['temp'];
    var minValue = data['main']['temp_min'];
    var maxValue = data['main']['temp_max'];

    city.innerHTML = cityValue;
    currentTemp.innerHTML = currentTempValue;
    minTemp.innerHTML = minValue;
    maxTemp.innerHTML = maxValue;

})
.catch(err => alert("Wrong city name!"))
});

