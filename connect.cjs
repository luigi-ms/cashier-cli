const Axios = require("axios");

const axios = Axios.create({
  baseURL: "https://fakestoreapi.com"
});

async function getAllProducts(){
  return await axios.get("/products/category/electronics");
}

async function searchByIndex(id){
  return await axios.get(`/products/${id}`);

}

module.exports = { getAllProducts, searchByIndex };
