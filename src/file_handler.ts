import * as fs from "fs";
import * as path from "path";
export const getCurrentDirectoryBase = () => {
  // get the base of the current directory
  return path.basename(process.cwd());
};

export const directoryExists = (filePath: string) => {
  return fs.existsSync(filePath);
};

export const getCurrentDirectory = () => {
  console.log(`get the current directory ${path.dirname(process.cwd())}`);
};
