import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="product-card" onClick={showDetail}>
      <div>
        <img src={item?.img} />
        <div className="product-card-NewArrival">
          {item?.new == true ? "NEW ARRIVAL" : ""}
        </div>
      </div>
      <div className="product-card-title">{item?.title}</div>
      <div className="product-card-price">${item?.price}</div>
      <div className="product-card-line"></div>
    </div>
  );
};

export default ProductCard;
