const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 8000;
let projectData = {};

// Functions
function listening() {
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};

function sendData(req, res) {
  res.json(projectData);
}

function addData(req, res) {
  const { api_key } = req.headers;
  const { description, zipCode } = req.body;

  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${api_key}`).then(
    (response) => response.json().then((data) => {
      projectData = {
        date: new Date(),
        description,
        temp: data.main.temp,
      }
      res.json(projectData);
    })
  );
}

// Initialize the main project folder
app.use(express.static('website'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use(cors());

// Routes
app.get('/recent', sendData);
app.post('/add', addData);

// Spin up the server
app.listen(port, listening);
