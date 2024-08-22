import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:4000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='product-container'>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} className='product-container-col'>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
