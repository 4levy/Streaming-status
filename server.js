const express = require('express');
const server = express();

server.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});

function keepAlive() {
  server.listen(5555, () => { console.log("Started" + Date.now()) });
}

module.exports = keepAlive;
