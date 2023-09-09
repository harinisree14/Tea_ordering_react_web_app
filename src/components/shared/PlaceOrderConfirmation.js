import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PlaceOrderConfirmation({ showModal, hideConfirmationModal, order }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const confirmOrderHandler = () => {
    // Simulate placing the order
    // You can replace this with your actual order placement logic.

    // For this simplified example, we'll just set orderPlaced to true.
    setOrderPlaced(true);

    // Close the confirmation modal
    hideConfirmationModal();
  };

  return (
    <Modal show={showModal} onHide={hideConfirmationModal}>
      <Modal.Header closeButton>
        <Modal.Title>Place Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display order details here */}
        <p>Product Name: {order.name}</p>
        <p>Quantity: {order.quantity} Litre unit</p>
        <p>Price: {order.price}</p>
        {/* Add more details as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideConfirmationModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={confirmOrderHandler}>
          Confirm Order
        </Button>
      </Modal.Footer>

      {/* Display the success message as a separate card */}
      {orderPlaced && (
        <Card className="mt-3">
          <Card.Body>
            <Card.Text>Order placed successfully!</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Modal>
  );
}

export default PlaceOrderConfirmation;
