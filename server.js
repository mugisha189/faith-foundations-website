const express = require('express');
const path = require('path');

const app = express();
const PORT = 4040;


const STATIC_DIR = path.join(__dirname, 'static');
const VIEWS_DIR = path.join(__dirname, 'views');


app.use(express.static(STATIC_DIR));

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'home.html'));
});

// About page
app.get('/about-us', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'about.html'));
});

// Donate page
app.get('/donate', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'donate.html'));
});

// Contact page
app.get('/contact-us', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'contact.html'));
});

// Causes / campaigns listing
app.get('/causes', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'causes.html'));
});

// Single cause page - dynamic id
app.get('/cause/:id', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'cause.html'));
});

// Events listing
app.get('/events', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'events.html'));
});

// Single event details (reuses events layout)
app.get('/event-details', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'events.html'));
});

// News / blog listing
app.get('/news', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'news.html'));
});

// Single blog post - dynamic id
app.get('/news/:id', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'single-new.html'));
});

// Legal / info pages
app.get('/terms', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'terms.html'));
});

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, 'privacy.html'));
});



// Simple 404 for anything else in this static app
app.use((req, res) => {
  res.status(404).sendFile(path.join(VIEWS_DIR, 'not-found.html'));
});

app.listen(PORT, () => {
  console.log(`Static app server running at http://localhost:${PORT}`);
});

