// import { listDirectoryContents } from "@srclaunch/logic";

import path from "node:path";

export async function listModels() {
  const modelsPath = path.join("models");

  // const files = (await listDirectoryContents(modelsPath)).filter((file) => {
  //   return file.slice(-3) === ".ts" && file.split(".ts")[0] !== "index";
  // });

  // console.info(files.map((file) => file.split(".ts")[0]).toString());
}
