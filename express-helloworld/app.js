var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/marciano', function (req, res) {
  res.send('Hello mars!\n');
});

app.listen(8089, function () {
  console.log('Example app listening on port 8080!');
});

