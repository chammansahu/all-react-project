import React, { useEffect } from "react";
import {Col,Row} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
//import pizzas from "../_pizzasdata";
import Pizzas from "./Pizzas";
import getAllPizzas  from "../../../actions/pizzaActions";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PizzaHome = () => {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <main>
        <Header />
        <div className="row justify-content-center ">
          {loading ? (
            <h1>Loading</h1>
          ) : error ? (
            <h1>Something went Wrong</h1>
          ) : (
            pizzas.map((pizza) => {
              return (
                <Row className="mx-2">
                  {pizzas.map((pizza) => (
                    <Col sm={{ span: 12, offset: 0 }} md={6} lg={3}>
                      <Pizzas pizza={pizza} />
                    </Col>
                  ))}
                </Row>
              );
            })
          )}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PizzaHome;
