const chokidar = require("chokidar");
const shell = require("shelljs");

chokidar.watch(["src/**"]).on("change", () => {
  shell.exec("npm run sass");
});
