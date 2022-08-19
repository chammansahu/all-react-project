import React, { useState } from "react";
import {
  Modal,
  Button,
  Card,
  Row,
  Col,
  Image,
  ListGroup,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import addToCart  from "../../../actions/cartAction";
const Pizzas = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);

  const add = () => {
    dispatch(addToCart(pizza, quantity, varient));
    
  };

  return (
    <>
      <Card style={{width:"18rem"}}
        className="my-3  card shadow-lg  bg-white rounded"
       
      >
        <Card.Img  src={pizza.image} alt="" onClick={handleShow} />
        <Card.Title>{pizza.name}</Card.Title>

        <Card.Body>
          <Form.Group>
            <Form.Label >Varients</Form.Label>
            <Form.Control
              as="select"
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
            >
              {pizza.varients.map((vt) => {
                return <option value={vt}>{vt}</option>;
              })}
            </Form.Control>

            <Form.Label>Quantity</Form.Label>
            <Form.Control
              as="select"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((quantity) => {
                return <option value={quantity + 1}>{quantity + 1}</option>;
              })}
            </Form.Control>

            <Card.Text>
              price:{pizza.prices[0][varient] * quantity}Rs/-
            </Card.Text>

            <Button onClick={add} size="lg">
              add
            </Button>
          </Form.Group>
        </Card.Body>
      </Card>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            className="img-fluid"
            src={pizza.image}
            alt={pizza.title}
            style={{ height: "400px" }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Pizzas;
