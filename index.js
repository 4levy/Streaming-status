const { Launcher } = require("@loybung/launcher");
const { resolve } = require("path");
const express = require("express");
const starting = express();
const port = 3000;

starting.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});

starting.listen(port, () => {
  console.log(`🔗 Listening to port : http://localhost:${port}`);
});

const app = new Launcher("https://loybung.vercel.app/api/project/streaming");
app.setPath(resolve(__dirname, "./app.js"));
app.setExpire(null);

app.Run().catch((err) => console.log(err.message));
