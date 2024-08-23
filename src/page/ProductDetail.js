import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Gigijiwonha/online-retail-store/products/${id}`;
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
        <Col xs={7} className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col xs={5} className="product-detal-info">
          <h1>{product?.title}</h1>
          <h3>${product?.price}</h3>
          <Button variant="dark" type="submit">
            ADD TO CART
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
