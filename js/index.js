// Async await
const getProductsList = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    productsList = data;
  
    // Nella eventualità di aggiungere una quantità per prodotto
    // productsList = data.map((product) => {
    //   product.quantity = 0;
    //   return product;
    // });
  
    return renderProducts(data);
  };
  
  let productsList = [];
  const wrapper = document.querySelector(".wrapper");
  const wrapperProducts = document.querySelector(".wrapper__products");