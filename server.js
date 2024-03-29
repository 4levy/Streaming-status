const express = require('express');
const path = require('path');
const server = express();

server.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

function keepAlive() {
  server.listen(5555, () => { console.log("Started" + Date.now()) });
}

module.exports = keepAlive;
