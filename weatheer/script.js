const form=document.querySelector("form");
const search =document.querySelector(".input-box");
const weather=document.querySelector(".show")
const API_KEY=`2051ef3fc8c0e6a0bcb50dea5da95e32`;
form.addEventListener("submit",
    function(event){
        getweather(search.value);
        event.preventDefault();     
    }
)

const getweather=async(city)=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response= await fetch(url);
    const response2= await fetch(forecastURL);
    const data= await response.json();
    const sata=await response2.json();
    console.log(sata)
    console.log(data);
    return showweather(data,sata);
}
t='delhi';
getweather(t);
const weatherIcons = {
  200: "⛈️", // thunderstorm with light rain
  201: "⛈️", // thunderstorm with rain
  202: "⛈️", // thunderstorm with heavy rain
  210: "🌩️", // light thunderstorm
  211: "🌩️", // thunderstorm
  212: "🌩️", // heavy thunderstorm
  221: "🌩️", // ragged thunderstorm
  230: "⛈️", // thunderstorm with light drizzle
  231: "⛈️", // thunderstorm with drizzle
  232: "⛈️", // thunderstorm with heavy drizzle

  300: "🌦️", // light drizzle
  301: "🌦️", // drizzle
  302: "🌦️", // heavy drizzle
  310: "🌦️",
  311: "🌦️",
  312: "🌦️",
  313: "🌦️",
  314: "🌦️",
  321: "🌦️",

  500: "🌧️", // light rain
  501: "🌧️", // moderate rain
  502: "🌧️", // heavy rain
  503: "🌧️",
  504: "🌧️",
  511: "🌨️", // freezing rain
  520: "🌦️", // shower rain
  521: "🌦️",
  522: "🌦️",
  531: "🌦️",

  600: "🌨️", // light snow
  601: "🌨️",
  602: "❄️",
  611: "🌨️", // sleet
  612: "🌨️",
  613: "🌨️",
  615: "🌨️",
  616: "🌨️",
  620: "🌨️",
  621: "🌨️",
  622: "❄️",

  701: "🌫️", // mist
  711: "🌫️", // smoke
  721: "🌫️", // haze
  731: "🌪️", // dust
  741: "🌫️", // fog
  751: "🌪️", // sand
  761: "🌪️", // dust
  762: "🌋", // volcanic ash
  771: "💨", // squall
  781: "🌪️", // tornado

  800: "☀️", // clear sky
  801: "🌤️", // few clouds
  802: "⛅", // scattered clouds
  803: "🌥️", // broken clouds
  804: "☁️", // overcast clouds
};

const showweather=(data,sata)=>{
  weather.innerHTML=`<h2>LOADING....</h2>`

    let id = data.weather[0].id;   // weather condition ID
let text = weatherIcons[id] || "❓ Unknown";
      

      weather.innerHTML=`
      <div class="placename">${data.name}</div>
            <div class="temp">${data.main.temp}
°C <div class="icon">${text}</div>
            </div>
            <div class="other">
                <div class="wind">Wind: ${data.wind.speed} km/h</div>
                <div class="humidity">Humidity: ${data.main.humidity}%</div>
            </div>
            <div class="nextdays">
                <div class="box">
                    <div class="date">${ new Date(sata.list[1].dt_txt.replace(" ", "T")).toLocaleDateString("en-US", { weekday: "short" })}
</div>
                    <div class="icon">${weatherIcons[sata.list[1].weather[0].id]}</div>
                    <div class="tempt">${sata.list[1].main.temp}°</div>
                </div>
                <div class="box">
                    <div class="date">${ new Date(sata.list[6].dt_txt.replace(" ", "T")).toLocaleDateString("en-US", { weekday: "short" })}</div>
                    <div class="icon">${weatherIcons[sata.list[6].weather[0].id]}</div>
                    <div class="tempt">${sata.list[6].main.temp}°</div>
                </div>
                <div class="box">
                    <div class="date">${ new Date(sata.list[13].dt_txt.replace(" ", "T")).toLocaleDateString("en-US", { weekday: "short" })}</div>
                    <div class="icon">${weatherIcons[sata.list[13].weather[0].id]}</div>
                    <div class="tempt">${sata.list[13].main.temp}°</div>
                </div>
                <div class="box">
                    <div class="date">${ new Date(sata.list[25].dt_txt.replace(" ", "T")).toLocaleDateString("en-US", { weekday: "short" })}</div>
                    <div class="icon">${weatherIcons[sata.list[25].weather[0].id]}</div>
                    <div class="tempt">${sata.list[25].main.temp}°</div>
                </div>
            </div> 
      `
}
showweather('aa');



