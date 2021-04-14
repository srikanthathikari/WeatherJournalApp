


const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&units=metric&APPID=eb8a5e185569290a4918724ce7b298ff";
const apiKey = "eb8a5e185569290a4918724ce7b298ff";




document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){ 
    console.log('test here')
    postData(baseURL, apiKey);
}


const postData = async (baseURL, apiKey)=>{
   

    const response = await fetch(baseURL);
    try {
        const data = await response.json();
        console.log(data);
        document.getElementById('content').innerHTML = data.base;
        return data;
    } catch(error){
        console.log(error);
    }
    // console.log(response);
   
}    
