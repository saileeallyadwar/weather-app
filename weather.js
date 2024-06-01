const apikey="8097d9ee197239c645b80737a6ba5c38";

const btn = document.querySelector(".search button");

const city = document.querySelector(".search input")

async function getData(city){

    const URL="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apikey;

    let response = await fetch(URL);
    var data = await response.json();
    console.log(data);

    document.querySelectorAll(".city")[0].innerHTML=data.name;
    document.querySelectorAll(".temp")[0].innerHTML=data.main.temp+"°";
    document.querySelectorAll(".hum")[0].innerHTML=data.main.humidity+"%";
    document.querySelectorAll(".wind")[0].innerHTML=data.wind.speed+"km/hr";


        if (data.weather[0].main =="Clouds"){
            document.querySelector(".img").src = "clouds.png";
        }
        if (data.weather[0].main =="Clear"){
            document.querySelector(".img").src = "clear.png";
        } 
        if (data.weather[0].main =="Drizzle"){
            document.querySelector(".img").src = "drizzle.png";
        } 
        if (data.weather[0].main =="Mist" || data.weather[0].main =="Haze"){
            document.querySelector(".img").src = "mist.png";
        } 
        if (data.weather[0].main =="Rain"){
            document.querySelector(".img").src = "rain.png";
        } 
        if (data.weather[0].main =="Snow"){
            document.querySelector(".img").src = "snow.png";
        } 

}

city.addEventListener("keydown",(event)=>{
    if(event==="enter" || event.keyCode===13){
        getData(city.value);
    }
})


btn.addEventListener("click",() =>{
    getData(city.value);
})
