import * as chalk from "chalk";
import { directoryExists } from "./file_handler";
// tslint:disable-next-line: no-var-requires
const clear = require("clear");
import * as figlet from "figlet";
import * as args from "args";
import {
  fullstackProject,
  initializeProject,
  backendProject,
  mobileProject
} from "./commands";
import { PROJECTTYPES } from "./constants/enums";

clear();

const run = async () => {
  args
    .option("port", "The port on which the app will be running", 3000)
    .option("reload", "Enable/disable livereloading")
    .command("serve", "Serve your static site");

  const flags = args.parse(process.argv);
  console.log(flags);
  const project: any = await initializeProject();
  console.log(project);

  let projectStack;

  if (project.projectType[0] === PROJECTTYPES.FULLSTACK) {
    projectStack = await fullstackProject();
    console.log(projectStack);
  } else if (project.projectType[0] === PROJECTTYPES.BACKEND) {
    projectStack = await backendProject();
    console.log(projectStack);
  } else if (project.projectType[0] === PROJECTTYPES.MOBILE) {
    projectStack = await mobileProject();
    console.log(projectStack);
  } else if (project.projectType[0] === PROJECTTYPES.FRONTEND) {
    console.log(project.projectType[0]);
  }
};

console.log(
  chalk.blueBright(figlet.textSync("exos", { horizontalLayout: "full" }))
);

//make sure the current  folder isn't a git already
if (directoryExists(".git")) {
  console.log(chalk.red("Sorry Human,This directory is already a git repo!⚠️"));
}

run();
