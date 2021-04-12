
const baseURL = "http://home.openweathermap.org";
const inputFromUser = document.getElementById('zip').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    getWeather(baseURL, inputFromUser, apiKey);
}

const getWeather = async (baseURL, inputFromUser, key) => {
    const res = await fetch(baseURL + inputFromUser + key)

    try {
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("error", error)
    }
}