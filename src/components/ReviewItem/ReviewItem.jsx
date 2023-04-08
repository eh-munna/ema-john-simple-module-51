import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({ product }) => {
  const { img, price, name, shipping } = product;
  console.log(product);
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <h5>
          Price : <span>${price}</span>
        </h5>
        <h5>
          Shipping Charge : <span>${shipping}</span>
        </h5>
      </div>
      <div>
        <h5>D</h5>
      </div>
    </div>
  );
};

export default ReviewItem;
