const fs = require("fs");

const main = async () => {
  const projectName = packageJson.name;
  if (projectName === "@srclaunch/types") {
    packageJson.scripts = defaultScripts;
  } else if (projectName === "@srclaunch/dx") {
    packageJson.scripts = defaultScripts;
  } else {
    packageJson.scripts = defaultScripts;
  }

  packageJson.exports = defaultExports;

  console.log("packageJson", packageJson);
};

module.exports = main();
