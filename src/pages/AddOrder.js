import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
 
function AddOrder() {
  const orderName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  
 
  const navigate = useNavigate();
 
  const addOrderHandler = () => {
    var payload = {
      name: orderName.current.value,
      quantity: quantity.current.value? Number(quantity.current.value):0,
      price: price.current.value ? Number(price.current.value): 0 ,
      
    };
    axios.post("http://localhost:4000/orders", payload).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <legend>Create</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={orderName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>Quantity(Litre Units)</Form.Label>
          <Form.Control type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={addOrderHandler}>
          Add
        </Button>
      </Form>
    </>
  );
}
export default AddOrder;