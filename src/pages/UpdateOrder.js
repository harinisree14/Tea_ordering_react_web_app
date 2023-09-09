import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
 
function UpdateOrder() {
  const orderName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  
 
  const { id } = useParams();
 
  const navigate = useNavigate();
 
  useEffect(() => {
    axios.get(`http://localhost:4000/orders/${id}`).then((response) => {
      orderName.current.value = response.data.name;
      quantity.current.value = response.data.quantity;
      price.current.value = response.data.price;
    });  
  }, []);
 
  const updateOrderHandler = () => {
    var payload = {
      name: orderName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      
    };
 
    axios.put(`http://localhost:4000/orders/${id}`, payload).then((response) => {
        navigate("/");
    })
  };
 
  return (
    <>
      <legend>Update</legend>
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
        <Button variant="primary" type="button" onClick={updateOrderHandler}>
          Update
        </Button>
      </Form>
    </>
  );
}
export default UpdateOrder;