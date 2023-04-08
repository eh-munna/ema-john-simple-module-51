import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

import './ReviewItem.css';
const ReviewItem = ({ product, removeItem }) => {
  const { id, img, price, name, shipping, quantity } = product;

  return (
    <div className="review-item">
      <div className="review-img">
        <img src={img} alt="" />
      </div>
      <div className="review-info">
        <h4>{name}</h4>
        <h5>
          Quantity : <span>{quantity}</span>
        </h5>
        <h5>
          Price : <span>${price}</span>
        </h5>
        <h5>
          Shipping Charge : <span>${shipping}</span>
        </h5>
      </div>
      <div className="review-del">
        <button
          onClick={() => removeItem(id)}
          className="bg-rose-100 w-10 flex flex-col justify-center items-center rounded-full"
        >
          <TrashIcon className="flex justify-center items-center w-5 h-5 text-rose-400" />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
