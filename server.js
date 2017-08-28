const http = require('http');
const dateFormat = require('dateformat');
const fs = require('fs');
var writeStream = fs.createWriteStream('./data/urls.txt');

const hostname = '127.0.0.1';
const port = 8080;
const WLCM_MSG = "Make DX great again!";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var now = new Date();
  var msg = dateFormat(now, 'dd.mm.yyyy HH:MM:ss') + ` url: ${req.url}`;
  console.log(msg);
  //fs.appendFile('/data/urls.txt');
  writeStream.write(msg + '\n');
  res.end(WLCM_MSG + ' ' + msg);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});