const Axios = require("axios");

const axios = Axios.create({
  baseURL: "https://fakestoreapi.com"
});

async function getAllProducts(){
  return await axios.get("/products/category/electronics");
}


module.exports = getAllProducts;
