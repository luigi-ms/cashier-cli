import chalk from "chalk";
import * as readline from "node:readline/promises";

import help from "./commands/help.js";
import list from "./commands/list.js";
import newSale from "./commands/new-sale.cjs";
import search from "./commands/search.cjs";

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

async function handleCommand(input){
  switch(input){
    case "":
      break;
    case "help":
      help(response);
      break;
    case "list":
      const prods = await list();

      if(prods instanceof Error){
        console.error(error(prods.message));
      }else{
        console.log(response(prods));
      }
      break;
    case "new-sale":
      console.log(response("\nOpening...\n"));
      break;
    case "search":
      console.log(response("Searching..."));
      break;
    case "start":
      console.log(prompt("Welcome!\nType help to see available commands\n"));
      break;
    case "quit":
      console.log(response("See you later!\n"));
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
      handleCommand("");
    });
}

handleCommand("start");
