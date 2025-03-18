

// const apikey='d4191221e2c1f210479c48bf9ea81472'

const input=document.querySelector("input")

const btn=document.getElementById("btn")

const icon = document.querySelector(".icon")
const wheather = document.querySelector(".wheather")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")

btn.addEventListener("click",()=>{
    let city = input.value;
    getwheather(city);
})

function getwheather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'d4191221e2c1f210479c48bf9ea81472'}`)
    .then(response => response.json())
    .then(data => {console.log(data)

        const iconcode=data.weather[0].icon
        icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconcode}.png" alt="weather Icon"/>`

        const weathercity=data.name
        const weathercountry=data.sys.country

        wheather.innerHTML=`${weathercity} ${weathercountry}`

        const weathertemp=data.main.temp

        temperature.innerHTML=`${weathertemp}C`

        const weatherdescription=data.weather[0].
        description
        

        description.innerHTML=`${weatherdescription}`
    })
}
