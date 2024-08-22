import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data>>>>", data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail-contatiner">
      <Row>
        <Col>
          <img src={product?.img} />
        </Col>
        <Col>
          <h1>{product?.title}</h1>
          <h3>${product?.price / 1000}</h3>
          <Button variant="dark" type="submit">
            ADD TO CART
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
