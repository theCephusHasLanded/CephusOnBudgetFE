import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

const TransactionNew = () => {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
    deposit: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/transactions`, transaction)
      .then((response) => {
        navigate(`/transactions/${response.data.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <div className="w-50">
        <h1 className="mb-4">New Transaction</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="item_name">
            <Form.Label>Item Name:</Form.Label>
            <Form.Control
              type="text"
              name="item_name"
              value={transaction.item_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Amount:</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={transaction.amount}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="text"
              name="date"
              value={transaction.date}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="from">
            <Form.Label>From:</Form.Label>
            <Form.Control
              type="text"
              name="from"
              value={transaction.from}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={transaction.category}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="deposit">
            <Form.Check
              type="checkbox"
              name="deposit"
              checked={transaction.deposit}
              onChange={handleInputChange}
              label="Deposit"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            💾 Save
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default TransactionNew;
