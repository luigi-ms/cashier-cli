import getAllProducts from "../connect.cjs";
import Table from "cli-table";

function createTable(list){
  const simplifiedList = list.data.map(prod => {
    return {
      id: prod.id,
      title: prod.title.substring(0, 15)+"...",
      price: prod.price
    };
  });
  
  const table = new Table({
    head: ["id", "title", "price"],
    colWidths: [5, 20, 10]
  });

  simplifiedList.forEach(prod => {
    table.push(Object.values(prod));
  });

  return Promise.resolve(table.toString());
}

export default async function list(){
  const products = await getAllProducts();
  const table = createTable(products);

  return (table instanceof Object)
    ? Promise.resolve(table)
    : Promise.reject(new Error("An error occured"));
}
