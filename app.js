

const api = {
    key: "ee7b6d1c9395bb3f062e8c21709d349e",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  //We now select our search-box class from our index.html file.
  const searchBox = document.querySelector('.search-box');
  
  //We need this box to also read events or actions on the page.
  //We're going to add an event listener to this box, and have it
  //"listen" for keypresses. On keypress, we will run our readUserInput function.
  //Note: addEventListener is an inbuilt function in Javascript while
  //readUserInput is user defined.
  searchBox.addEventListener('keypress', readUserInput);

  //We define a function that takes in an event parameter.
  function readUserInput(event) {
    //If the enter key is pressed...
    if (event.keyCode == 13) {
      //run another function, that takes another parameter!
      //this parameter is based on the value or input within the searchBox.
      getAPIResults(searchBox.value);
    }
  }
  
  //ANOTHER FUNCTION
  //We want to wrap our searchbox value into something the API can be sent.
  
  function getAPIResults (userInput) {
    //We fetch our api using the Object we defined above.
    //Fetch can be a bit tricky, and we're also using promises by utilizing .then.

    fetch(`${api.base}weather?q=${userInput}&units=imperial&APPID=${api.key}`)
      .then(weatherData => {
        return weatherData.json();
      }).then(updateHTMLwithData);
  }
  
  function updateHTMLwithData (weather) {
    
    //Lets select our location-id and create a variable
    let city = document.querySelector('#location-id');
    //Now we can tell whatever data boxed into our city variable to take in
    //values from weather.name, and weather.sys.country. This is referencing
    //the data recieved back in our JSON object.
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  
    //Same thing with temperature!
    let temp = document.querySelector('#temp-ID');
    temp.innerText  = weather.main.temp; 
  
  
    //Now onto the icon!
    let icon = document.querySelector('.weather-icon');

    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"/>`;
  }
