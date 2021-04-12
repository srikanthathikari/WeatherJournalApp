if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const WEATHER_JOURNAL_APIKEY = process.env.WEATHER_JOURNAL_APIKEY
const port = 8080;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'))

app.post('/weather', (req,res)=>{

})


// const cors = require('cors');

// app.use(cors());

// app.use(express.urlencoded({extended:true}));

const server = app.listen(port, ()=>{console.log(`port number is :${port}`)});


