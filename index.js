const { Launcher } = require("@loybung/launcher");
const { resolve } = require("path");
const express = require("express");
const app = express();

app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});

const app = new Launcher("https://loybung.vercel.app/api/project/customstatus");

app.setPath(resolve(__dirname, "./app.js"));
app.setExpire(null);

app.Run().catch((err) => console.log(err.message));
