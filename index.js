const { launcher } = require("@loybung/launcher");
const path = require("path");

const options = {
  url: "https://loybung.vercel.app/api/project/streaming",
  filepath: path.resolve(__dirname, "server.js"),
};

launcher(options, (run) => {
  run();
});
