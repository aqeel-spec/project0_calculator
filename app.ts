import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// import files
import validator from "./src/validator.js";
// import shape module 
import shape from "./src/shapes.js";

console.clear();
const autoRunner = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function header() {
  let title = chalkAnimation.rainbow(`let's do some calculation`);
  await autoRunner();
  title.stop();
  console.log(chalk.greenBright.bold(shape));
}
//header();

type Operation = "+" | "-" | "X" | "÷" | "%" | "^" | "√";

async function question() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "fNumber",
      message: "Please enter your first number : ",
      validate: validator,
    },
    {
      type: "list",
      name: "operator",
      message: "Please select which operation you want to perform \n",
      choices: ["+", "-", "X", "÷", "%", "^", "√"],
    },
    {
      type: "input",
      name: "sNumber",
      message: "Please enter your second number : ",
      validate: validator,
    },
  ]);
  const operation: Operation = answers.operator;
  const firstNumber = Number(answers.fNumber);
  const secondNumber = Number(answers.sNumber);
  const outputShower = `${firstNumber} ${operation} ${secondNumber} = `
  switch (operation) {
    case "+":
      console.log(`${outputShower} ${firstNumber + secondNumber}`);
      break;
    case "-":
      console.log(`${outputShower} ${firstNumber - secondNumber}`);
      break;
    case "X":
      console.log(`${outputShower} ${firstNumber * secondNumber}`);
      break;
    case "÷":
      console.log(`${outputShower} ${firstNumber / secondNumber}`);
      break;
    case "%":
      console.log(`${outputShower} ${firstNumber % secondNumber}`);
      break;
    case "^":
      console.log(`${outputShower} ${Math.pow(firstNumber, secondNumber)}`);
      break;
    case "√":
      console.log(`${outputShower} ${Math.sqrt(firstNumber + secondNumber)}`);
      break;
  }
}

async function startAgain() {
  do {
    await header();
    await question();
    var selection = await inquirer.prompt([
      {
        type: "confirm",
        name: "restart",
        message: "Do you want to start again ?: ",
        default: false,
      },
    ]);
  } while (
    selection.restart === true ? await question() : false
  )
}
startAgain();
