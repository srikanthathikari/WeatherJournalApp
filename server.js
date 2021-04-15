const express = require('express');
const app = express();
const port = 8080;

let bodyParser = require('body-parser');
let cors = require('cors');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Port ${port} is running`)
})


let projectData = {};

app.get('/all', getData)

function getData(req, res) {
    res.send(projectData);
}


app.post('/saveData', saveData)

function saveData(req, res) {
    projectData = req.body;
    res.send(projectData);
}


