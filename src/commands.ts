import { prompt } from "inquirer";
import {
  PROJECTTYPES,
  FULLSTACK_PROJECT_TYPES,
  BACKEND_PROJECT_TYPES,
  MOBILE_PROJECT
} from "./constants/enums";

export const askGithubCredentials = () => {
  const questions = [
    {
      name: "username",
      type: "input",
      message: "Enter your Github username:",
      validate: (value: string) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter  your username";
        }
      }
    },
    {
      name: "password",
      type: "password",
      message: "Enter your password:",
      validate: (value: string) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter your password.";
        }
      }
    }
  ];
  return prompt(questions);
};

export const initializeProject = () => {
  const questions = [
    {
      name: "projectName",
      type: "input",
      message: "What would you call your project?",
      validate: (value: string) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter a valid project name";
        }
      }
    },
    {
      name: "projectType",
      type: "checkbox",
      message: "Which platforms would you be working on?",
      choices: [
        PROJECTTYPES.FULLSTACK,
        PROJECTTYPES.FRONTEND,
        PROJECTTYPES.BACKEND,
        PROJECTTYPES.MOBILE
      ],
      default: [PROJECTTYPES.FULLSTACK],
      validate: (value: string) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter a valid project type";
        }
      }
    }
  ];

  return prompt(questions);
};

export const fullstackProject = () => {
  const questions = [
    {
      name: "projectStack",
      type: "checkbox",
      message: "Which frameworks would you like to work with?",
      choices: [
        FULLSTACK_PROJECT_TYPES.REACT_GRAPHQL,
        FULLSTACK_PROJECT_TYPES.REACT_GRAPHQL,
        FULLSTACK_PROJECT_TYPES.FLUTTER_CODEMAGIC_REST,
        FULLSTACK_PROJECT_TYPES.REACT_REST
      ],
      default: [FULLSTACK_PROJECT_TYPES.FLUTTER_CODEMAGIC_REST],
      validate: (value: string) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter a valid project stack";
        }
      }
    }
  ];

  return prompt(questions);
};

export const backendProject = () => {
  const questions = [
    {
      name: "projectStack",
      type: "checkbox",
      message: "Which API type are you building?",
      choices: [
        BACKEND_PROJECT_TYPES.GRAPHQL_API,
        BACKEND_PROJECT_TYPES.REST_API
      ],
      default: [BACKEND_PROJECT_TYPES.REST_API],
      validate: (value: string) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter a valid project stack";
        }
      }
    }
  ];

  return prompt(questions);
};
export const mobileProject = () => {
  const questions = [
    {
      name: "projectStack",
      type: "checkbox",
      message: "Which frameworks would you like to work with?",
      choices: [MOBILE_PROJECT.REACT_NATIVE, MOBILE_PROJECT.FLUTTER],
      default: [MOBILE_PROJECT.FLUTTER],
      validate: (value: string) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter a valid project stack";
        }
      }
    }
  ];

  return prompt(questions);
};
