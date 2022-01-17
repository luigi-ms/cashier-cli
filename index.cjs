const chalk = require("chalk");
const readline = require("readline/promises");

const help = require("./commands/help.cjs");
const list = require("./commands/list.cjs");
const newSale = require("./commands/new-sale.cjs");
const search = require("./commands/search.cjs");

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
  const command = input[0];

  switch(command){
    case 1:
      console.log(prompt("Welcome!\nType h to see available commands\n"));
      break;
    case "":
      break;
    case "h":
      help(response);
      break;
    case "l":
      const prods = await list();

      if(prods instanceof Error){
        console.error(error(prods.message));
      }else{
        console.log(response(prods));
      }
      break;
    case "n":
      console.log(response("\nOpening...\n"));
      break;
    case "s":
      const index = input.substring(2);
      console.log(response("Searching..."));
      break;
    case "q":
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

handleCommand(1);
