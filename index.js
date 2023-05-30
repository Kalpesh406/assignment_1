const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/g2_page', (req, res) => {
  res.render('g2_page');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
