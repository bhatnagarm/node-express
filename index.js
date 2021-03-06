const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname='localhost';
const port=3000;
const dishRouter = require('./router/dishRouter');
const promoRouter = require('./router/promoRouter');
const leaderRouter = require('./router/leaderRouter');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname+ '/public'))
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.use(express.static(__dirname+ '/public'))

app.use((req, res, next) => {
  req.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body><h1>This is a Express server</h1></body></html>');

});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
