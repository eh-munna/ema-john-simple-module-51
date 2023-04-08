import { getShoppingCart } from '../utilities/fakedb';

const cartProductsLoader = async () => {
  const loadedProducts = await fetch('products.json');
  const products = await loadedProducts.json();

  // if cart data is in database then we have to use async await to asynchronous

  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  // if we need to return 2 items as return we have to wrap them in an array or in an object
  // return [products, savedCart];
  // return {products, savedCart};
  return savedCart;
};
export default cartProductsLoader;
