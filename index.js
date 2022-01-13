import chalk from "chalk";
import * as readline from "node:readline/promises";

import help from "./commands/help.js";

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = chalk.bold.hex("#90ee90"),
  response = chalk.bold.hex("#e5ebe7"),
  error = chalk.italic.hex("#bf0010"),
  warning = chalk.italic.hex("fbe35f");

async function capture(){
  const data = await read.question(prompt("cashier-cli>> "));

  return (data.length > 0)
    ? Promise.resolve(data)
    : Promise.reject(warning("Nothing inserted"));
}

function handleCommand(input){
  switch(input){
    case "start":
      console.log(prompt("Welcome!"));
      break;
    case "help":
      help(response);
      break;
    case "list":
      console.log(response("\nListing...\n"));
      break;
    case "search":
      console.log(response("Searching..."));
      break;
    case "quit":
      console.log(response("\nQuiting...\n"));
      process.exit();
      break;
    default:
      console.log(error(`${input} is not a command`));
      break;
  }

  capture()
    .then(res => handleCommand(res))
    .catch(rej => {
      console.warn(rej);
      process.exit();
    });
}

handleCommand("start");
