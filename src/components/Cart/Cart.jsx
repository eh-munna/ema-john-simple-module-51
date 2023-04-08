import React from 'react';
import './Cart.css';
import { CreditCardIcon, TrashIcon } from '@heroicons/react/24/solid';

const Cart = ({ cart, clearCart, children }) => {
  // const cart = props.cart; // option 1
  // const {cart} = props; // option 2

  // console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <div className="space-y-2">
        <h4 className="font-semibold">Order Summary</h4>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
      </div>

      <button
        onClick={clearCart}
        className="my-2 bg-slate-100 text-rose-500 rounded-md gap-3 w-full justify-center flex items-center"
      >
        <span className="font-semibold">Clear Cart</span>
        <TrashIcon className="w-5 h-5 text-rose-500 " />
      </button>

      {children}
    </div>
  );
};

export default Cart;
