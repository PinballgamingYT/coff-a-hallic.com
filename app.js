const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, 'pages/assets')));

// Define route for your homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

// Other routes
app.get('/locations.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'locations.html'));
});

app.get('/menu.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'menu.html'));
});

app.get('/ourteam.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'ourteam.html'));
});

app.get('/ourteam.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'sitemap.xml'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
