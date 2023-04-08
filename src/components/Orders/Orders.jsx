import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { removeFromDb, deleteShoppingCart } from '../../utilities/fakedb';

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const removeItem = (id) => {
    // meaning give me all which is not matched
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            removeItem={removeItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
