function help(styled){
  [
    "h(elp) - Exibe todos os comandos disponiveis",
    "l(ist) - Lista os produtos existentes na base de dados",
    "n(ew-sale) - Inicia uma nova venda",
    "s(earch) INDEX - Procura um produto na base de dados com base no INDEX",
    "q(uit) - Sai do sistema"
  ].forEach(command => {
    console.log(styled("\t"+command));
  });
}

module.exports = help;
