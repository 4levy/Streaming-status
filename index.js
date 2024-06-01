const { Launcher } = require("@loybung/launcher");
const { resolve } = require("path");
const express = require("express");

const starting = express();
const port = 3000;

starting.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว !'));
starting.listen(port, () =>
  console.log(`Listening to port | http://localhost:${port}`)
);

const app = new Launcher("https://loybung.vercel.app/api/project/customstatus");
app.setPath(resolve(__dirname, "./app.js"));
app.setExpire(null);

app.Run().catch((err) => console.log(err.message));
