require('./index.css')
const {UI}= require('./UI')
const {Weather}= require('./Weather')
const {Store}= require('./Store')

const store = new Store()
const{city,countryCode} = store.getLocationData() 

const ui = new UI()
const weather= new Weather(city,countryCode)

async function fetcWeather(){
const dta = await weather.getWeather();
console.log(dta);
ui.render(dta);
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city =document.getElementById('city').value
    const countryCode = document.getElementById('countryCode').value
console.log(city, countryCode)
weather.changeLocation(city, countryCode);
store.setLocationData(city, countryCode);

fetcWeather()
e.preventDefault();
})

document.addEventListener('DOMContentLoaded',fetcWeather)