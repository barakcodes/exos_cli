import * as chalk from "chalk";
// import { directoryExists } from './file_handler';
// tslint:disable-next-line: no-var-requires
const clear = require("clear");
import * as figlet from "figlet";
// import * as args from 'args';
import * as commander from "commander";
import { getCurrentDirectory } from "./file_handler";

clear();
console.log(
  chalk.blueBright(figlet.textSync("exos", { horizontalLayout: "full" }))
);
// plan out the promptser

getCurrentDirectory();
commander.version("0.1.0");

// command to initalize projects
commander
  .command("init ")
  .alias("-i")
  .description("Initializes a new project!")
  .action(() => {
    //
    console.log("Initializing the project!");
    // call the inquire stuff
  });

// command for github stuff
commander
  .command("git")
  .alias("-gl")
  .description("Login in to your github/bitbucket account!")
  .action(() => {
    //call inquier to handle all the calling stuff
  });

// command to commit to github/bitbucket
commander
  .command("commit")
  .alias("-cm")
  .description("Commit the project to github/bitbucket")
  .action(() => {
    // call a function that commits the file :git commit
  });

// command to create a new development branch

commander
  .command("branch <name>")
  .alias("-b")
  .description("Creates a feature branch from the development branch")
  .action(name => {
    // call a function that commits the file :git commit
    console.log("Branch to be created ", name);
  });

commander
  .command("merge")
  .alias("-m")
  .description("Merges the branch to develop and deletes it.")
  .action(() => {
    //merge the branch to the development branch
  });

commander.parse(process.argv);
// const run = async () => {
//   args
//     .option('port', 'The port on which the app will be running')
//     .option('reload', 'Enable/disable livereloading')
//     .command('serve', 'Serve your static site');

//   const flags = args.parse(process.argv);
//   console.log(flags);
//   const project: any = await initializeProject();
//   console.log(project);

//   let projectStack;

//   if (project.projectType[0] === PROJECTTYPES.FULLSTACK) {
//     projectStack = await fullstackProject();
//     console.log(projectStack);
//   } else if (project.projectType[0] === PROJECTTYPES.BACKEND) {
//     projectStack = await backendProject();
//     console.log(projectStack);
//   } else if (project.projectType[0] === PROJECTTYPES.MOBILE) {
//     projectStack = await mobileProject();
//     console.log(projectStack);
//   } else if (project.projectType[0] === PROJECTTYPES.FRONTEND) {
//     console.log(project.projectType[0]);
//   }
// };

// console.log(
//   chalk.blueBright(figlet.textSync('exos', { horizontalLayout: 'full' }))
// );

// //make sure the current  folder isn't a git already
// if (directoryExists('.git')) {
//   console.log(chalk.red('Sorry Human,This directory is already a git repo!⚠️'));
// }

//run();
