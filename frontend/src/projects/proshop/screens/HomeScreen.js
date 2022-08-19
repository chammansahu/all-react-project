import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { Row, Col } from "react-bootstrap";
import products from "../../../products";
import Product from "../../components/Product";
import axios from "axios";
import ProShopHeader from "../ProShopHeader";
import ProShopFooter from "../ProshopFooter";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } =await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <>
      <main>
        <ProShopHeader />
       
        <Link to="/" className="btn btn-dark my-3 ">Back
        </Link><h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={3} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <ProShopFooter />
      </main>
    </>
  );
};

export default HomeScreen;
