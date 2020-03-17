/* Empty Javascript object to act as an endpoint for all routes*/
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;
// Callback function to debug
function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};
//Spin up the server
const server = app.listen(port, listening);

// GET route
app.get('/all', sendData);
function sendData(req, res) {
    res.send(projectData);
}

// POST route
app.post('/add', callBack);
function callBack(req, res) {
    res.send('POST recieved');
};