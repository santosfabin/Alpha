const fs = require("fs");

function readFile(file) {
  try {
    return fs.readFileSync(file, "utf-8")
  }
  catch (e) {
    return e
  }
}

module.exports = readFile;
