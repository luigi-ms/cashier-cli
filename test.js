fetch('https://fakestoreapi.com/products')
  .then(res => {
    let result = res.data;

    let categories = res.data.
  })
  .catch(rej => console.log(rej.message));
