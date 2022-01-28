//variables
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart-btn');
const clearCartBtn = document.querySelector('.clear-cart-btn');
const cartDOM = document.querySelector('.cart');
const carOver = document.querySelector('.cart-over');
const carItems = document.querySelector('.cart-items');
const carTot = document.querySelector('.cart-total');
const carContent = document.querySelector('.cart-content');

const wrapperProducts = document.querySelector('.wrapper__products');


// cart
let cart = [];

//buttons
let buttonsDOM = []


// getting products
class Products{
  async getProducts(){
  try{  
    let result = await fetch('https://fakestoreapi.com/products');
    let products = await result.json();

    // let products = data.map(item =>{
    //   const {title} = item.title;
    //   const {price} = item.price;
    //   const {id} = item.id;
    //   const image = item.image;
    //   return{title, price, id, image}
    // })

    return products;

  } catch (error){
    console.log(error);
  }
}
}
// display products
class UI{
  displayProducts(products){
 let result = '';
 products.forEach(product => {
   result += `
   <!--PRODUCT-->
   <article class="single-product">
     <div class="img-container">
       
       <img src=${product.image} alt="product" class="img-product">
       
       <button class="prod-cart-btn" data-id=${product.id}>   
       <i class="fas fa-shopping-cart"></i>
       ADD TO BAG
       </button>
     </div>

     <h3>${product.title}</h3>
     <h4>€${product.price}</h4>
   </article>
   <!-- END - PRODUCTS-->
   `
 });
 
 wrapperProducts.innerHTML = result;
  } 
  getCartButtons(){
   
  const addBtns = [...document.querySelectorAll('.prod-cart-btn')];

  buttonsDOM = addBtns;
  addBtns.forEach(button => {
  let id = button.dataset.id;
  let inCart = cart.find(item => item.id === id);
  // console.log(button.dataset.id)
  if(inCart){
    button.innerText = "IN CART";
    button.disabled = true;
  } 

  button.addEventListener('click', (e) => {
      // e.target.innerText = "IN CART";
      // e.target.disabled = true;

      //get product from products 
      let cartItem = {...Storage.getProduct(button.dataset.id)};
      console.log(cartItem.id)
      //add product to the cart and
      cart = [...cart, cartItem];
      // console.log(cart)
      //save it in local storage
      //set cart values 
      //display cart item


  });

});
  }
}

// local storage
class Storage{
  static saveProducts(products){
  localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id){
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(product => product.id === id)
  }
}

document.addEventListener('DOMContentLoaded', () =>{
 const ui = new UI()
 const products = new Products();

 // get all products
 products.getProducts().then(products => { 
  ui.displayProducts(products)
  Storage.saveProducts(products)
 }).then(()=>{
    ui.getCartButtons();
 });
})


