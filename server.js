const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const projectData = [
  {
    mood: 'Happy',
  },
  {
    mood: 'Sad',
  }
];
const port = 8000;
const openWeatherMapKey = '373161157a0c9e297334f502c0cfadcd';

// Functions
function listening() {
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};

function sendData(req, res) {
  res.json(projectData);
}

function addData(req, res) {
  // TODO: update projectsData with req.body
  console.log(req.body);
  res.send('POST recieved');
}

// Initialize the main project folder
app.use(express.static('website'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use(cors());

// Routes
app.get('/all', sendData);
app.post('/add', addData);

// Spin up the server
app.listen(port, listening);
