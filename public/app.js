

//Weather API URL
const baseURL = "https://api.openweathermap.org/data/2.5/weather?metrics=standard&temp=Celsius&zip=";

//Personal API KEY
const apiKey = "&APPID=eb8a5e185569290a4918724ce7b298ff";

// Adding an event listener for the user to click on generate button
document.getElementById('generate').addEventListener("click", getData);
const valueFromUser = document.getElementById('zip');


function getData() {
    getWeatherData(baseURL, valueFromUser.value, apiKey).then(function (data) {
        saveWeatherInformation('/saveData', { location: data.name, temperature: data.main.temp }).then(updateUI());
    })
}

const getWeatherData = async (baseURL, valueFromUser, apiKey) => {
    // console.log(valueFromUser)
    const response = await fetch(baseURL + valueFromUser + apiKey);
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch (error) {
        return error;
    }
}
const saveWeatherInformation = async (url, data) => {
    const responseAgain = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newInfo = await responseAgain.json();
        console.log(newInfo);
    } catch (error) {
        console.log(error);
    }
}

const updateUI = async () =>{
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        document.getElementById('temp').innerHTML = allData[0].weather
    }catch(error){
        alert('There is a problem with '+ error);
    }
}







