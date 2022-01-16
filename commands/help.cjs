function help(styled){
  [
    "help - Exibe todos os comandos disponiveis",
    "list - Lista os produtos existentes na base de dados",
    "new-sale - Inicia uma nova venda",
    "search - Procura um produto na base de dados",
    "quit - Sai do sistema"
  ].forEach(command => {
    console.log(styled("\t"+command));
  });
}

module.exports = help;
