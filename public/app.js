
import apiKey from './api.js';

//Weather API URL
const baseURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&temp=Celsius&zip=";

// Adding an event listener for the user to click on generate button
document.getElementById('generate').addEventListener("click", getData);
const zip = document.getElementById('zip');
const feelingsFromUser = document.getElementById('feelings');

const dateToday = new Date();
let newDate = dateToday.getMonth() + 1 +  '-' + dateToday.getDate() + '-' + dateToday.getFullYear();


function getData() {
   const userData = {
    feelings: feelingsFromUser.value,
    newDate,
    }
  
  
    getWeatherData(baseURL, zip.value, apiKey).then(function (data) {
        saveWeatherInformation('/saveData', data, userData ).then(updateUI());
    }) 
}

const getWeatherData = async (baseURL, zip, apiKey) => {
    const response = await fetch(baseURL + zip + apiKey);
    try {
        const newData = await response.json();
        return newData;
    }
    catch (error) {
        return error;
    }
}
const saveWeatherInformation = async (url, data,userData) => {
    const responseAgain = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({dataFromAPI : data, dataFromUser : userData}),
    });
    try {
        const newInfo = await responseAgain.json();
    } catch (error) {
        console.log(error);
    }
}

const updateUI = async () =>{
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        console.log(allData)
        document.getElementById('date').innerHTML = `Today is ${newDate}`;
        document.getElementById('temp').innerHTML = `Weather now  ${allData.dataFromAPI.main.temp} \u00B0C`;
        document.getElementById('content').innerHTML = `You are feeling ${allData.dataFromUser.feelings}`
    }catch(error){
        console.log('There is a problem with '+ error);
    }
}







