const chokidar = require("chokidar");
const shelljs = require("shelljs");
const chalk = require("chalk");
const log = console.log;

chokidar.watch(".", {
  ignored: /(^|[\/\\])\../
}).on("change", (event, path) => {
  log(chalk.rgb(59, 199, 255).bold(event + " changed ..."));
  log(chalk.rgb(255, 124, 59).bold("Browser refreshing ..."));
  shelljs.exec("./refresh.sh");
});