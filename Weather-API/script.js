const weatherApi = {
    key: "c08300591ed3d6a8eff07bff29231672",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


// Anonymous function
// event listner function on keypress
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (Event) => {

    if(event.keyCode == 13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
    }


});

// get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name} , ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil (weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);


    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('images/1.jpg')";
    }
     else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('images/3.jpg')";
    }
     else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('images/4.jpg')";
    }
    
   else  if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('images/2.jpg')";
   }
}

// date manage

function dateManage(dateArg)
{
    let days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Satuday"];

    let months = ["Januuary" , "February" ,"March" , "April" ,"May" ,"June" ,"July" ,"August" , "September" ,"October" , "November" ,"December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year}`;
}
// show weather report

// c08300591ed3d6a8eff07bff29231672


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// const searchInputBox = document.getElementById('input-box');
// searchInputBox.addEventListener('keypress', (Event) => {

//     if(event.keyCode == 13){
//     console.log(searchInputBox.value);
//     }


// });