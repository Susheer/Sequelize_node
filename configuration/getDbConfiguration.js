const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");
let data = {};
try {
  // console.log("Path ", path.join(__dirname + "/db.yaml"));
  let fileContents = fs.readFileSync(path.join(__dirname + "/db.yaml"), "utf8");
  data = yaml.safeLoad(fileContents);

  // console.log(data);
} catch (e) {
  console.log(e);
}

module.exports = data;
