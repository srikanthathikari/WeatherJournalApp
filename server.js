const port = 8080;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const server = app.listen(port, ()=>{console.log(`port number is :${port}`)});


app.get('/', (req,res)=>{

    res.send('We ve go you');

})