const express = require('express');
const app = express();
const port = 8080;

let bodyParser = require('body-parser');
let cors = require('cors');
const { response } = require('express');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:8080'}));

app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`Port ${port} is running`)
})


const projectData = {};


app.get('/entry', getMapData)

console.log('There is request coming here');
function getMapData(req,res){
  
    res.send(response)
}

