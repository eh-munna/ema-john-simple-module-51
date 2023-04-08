import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

import './ReviewItem.css';
const ReviewItem = ({ product }) => {
  const { img, price, name, shipping, quantity } = product;
  console.log(product);
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
        <button className="">
          <TrashIcon className="flex justify-center items-center w-6 h-6 text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
