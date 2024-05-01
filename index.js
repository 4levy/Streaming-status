const { launcher } = require("@loybung/launcher");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});

app.listen(port, () => {
  console.log(`🔗 Listening to port : http://localhost:${port}`);
});


const options = {
  url: "https://loybung.vercel.app/api/project/streaming",
  filepath: path.resolve(__dirname, "app.js"),
};

launcher(options, (run) => {
  if (typeof run === 'function') {
    run();
  } else {
    console.error("Error: 'run' is not a function");
  }
});
