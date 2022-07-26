// Import Express into this file
const express = require('express');

// https://nodejs.org/api/path.html
const path = require('path');

require('dotenv').config();

///////////////
// CONFIGURATION

// Create an instance of an Express app
const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");

// Define what port the app will run on
const port = process.env.PORT || 8080;

// Serve files in /public statically
app.use(express.static(path.join(__dirname, 'public')))

// Define views folder
app.set('views', path.join(__dirname, 'views'));
///////////////

///////////////
// ROUTING
// GET requests on root
app.get('/', (req, res) => {
  res.render('index');
});

// GET requests on /projects
app.get('/projects', (req, res) => {
  res.render('projects');
});

// GET on any undefined routes
app.get('/*', (req, res) => {
  res.redirect('/');
});
///////////////

app.listen(port, () => {
  console.log(`Express learning server listening on port ${port}`);
});
