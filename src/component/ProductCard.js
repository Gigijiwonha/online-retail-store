import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} />
      <div>{item?.title}</div>
      <div>${item?.price / 1000}</div>
      <div>{item?.new == true ? "NEW ARRIVAL" : ""}</div>
    </div>
  );
};

export default ProductCard;
