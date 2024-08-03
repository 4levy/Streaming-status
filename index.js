const { Launcher } = require("@loybung/launcher");
const { join } = require("path");

const express = require("express");

const starting = express();
const port = 3000;

starting.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว !'));
starting.listen(port, () =>
  console.log(`Listening to port | http://localhost:${port}`)
);

// LAUNCHER STREAMING
const app = new Launcher("https://loybung.vercel.app/api/v2/code/streaming")
	.setFilePath(join(__dirname, "./app.js"))
	.setExpire(null);

app.Run();
