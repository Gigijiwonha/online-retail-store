import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, serQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/Gigijiwonha/online-retail-store/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <img src="https://www.rollingstone.com/wp-content/uploads/2024/03/Peggy-Gou-2-01-0283.jpg?w=1581&h=1054&crop=1" />
          <img src="https://mixmag.net/assets/uploads/images/_full/PeggyGou_IHearYou.png" />
          <img src="https://www.gqmiddleeast.com/cloud/2023/06/17/lUB7oU4x-GQ-Features-Image-2023-06-17T190448.062.png" />
        </Slider>
      </div>
      <div className="product-container">
        <Container>
          <Row>
            {productList.map((menu) => (
              <Col lg={3} className="product-container-col">
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductAll;
