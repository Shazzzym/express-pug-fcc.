const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views/pug');

app.route('/').get((req, res) => {
  res.render('index');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
