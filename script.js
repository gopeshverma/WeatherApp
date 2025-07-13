const input = document.querySelector('#input');
const button = document.querySelector('#search-icon');
const img = document.querySelector('#img');
const text = document.querySelector('#text');
const temprature = document.querySelector('#temp');
const city = document.querySelector('#city');
const country = document.querySelector('#country');
const resultBox = document.querySelector('.result-box');





async function getData(city)
{
   let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=401393ed0ec940ec8a1110813252002&q=${city}&aqi=no`);
   let data = await response.json();
   result(data);
} 

async function result(data){
    // console.log(data)
    try
    {
            img.src = data.current.condition.icon;
            temprature.textContent = data.current.temp_c;
            text.textContent = data.current.condition.text;
            city.textContent =data.location.name;
            country.textContent = data.location.country;
            input.value="";
            resultBox.style.display = "flex";
    }
    catch(error)
    {
        alert("Please enter correct city name ");
        input.value ="";
    }

}

button.addEventListener('click',async(e)=>{
//    let data =  await getData(input.value);
//    console.log(data)
        getData(input.value)


})