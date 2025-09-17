const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set Pug as the template engine
app.set('view engine', 'pug');

// Set the views directory
app.set('views', './views/pug');

// Home route that renders the Pug template
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
