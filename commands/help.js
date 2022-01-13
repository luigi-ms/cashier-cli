export default function help(styled){
  [
    "help - Exibe todos os comandos disponiveis",
    "list - Lista os produtos existentes na base de dados",
    "search - Procura um produto na base de dados",
    "quit - Sai do sistema"
  ].forEach(command => {
    console.log(styled("\t"+command));
  });
}
