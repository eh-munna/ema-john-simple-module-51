import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { removeFromDb, deleteShoppingCart } from '../../utilities/fakedb';
import {
  ArrowRightIcon,
  CreditCardIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
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
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/checkout">
            <button className="my-2 bg-slate-100 text-orange-500 rounded-md gap-3 w-full justify-center flex items-center">
              <span className="font-semibold">Proceed Checkout </span>
              <CreditCardIcon className="w-5 h-5 text-orange-500 " />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
