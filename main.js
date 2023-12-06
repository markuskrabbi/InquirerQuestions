import inquirer from 'inquirer'

inquirer.prompt([
  {
    name: "greeting",
    message: "What is your name?",
    type: "input",
  },
  {
    name: "colors",
    message: "What color do yo hate the most?",
    type: "list",
    choices: ["black", "orange", "blue", "gray", "green", "pink"]
  },
  {
    name: "age",
    message: "How old are you?",
    type: "number",
  },
  {
    name: "hobbies",
    message: "What do you do in your free time?",
    type: "checkbox",
    choices: ["sleeping", "sports", "cooking", "traveling", "painting", "gaming"]
  },
  {
    name: "confirm",
    message: "Are you really sure, cuz?",
    type: "confirm",
  },
  {
    name: "password",
    message: "Enter your facebook password",
    type: "password",
  }
])
.then(function (answers) {
  console.log(answers);
});