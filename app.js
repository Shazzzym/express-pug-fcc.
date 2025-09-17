const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.render('index');
});

// Set methods AFTER the route (as suggested in forum)
app.set('view engine', 'pug');
app.set('views', './views/pug');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
