import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

const TransactionEdit = () => {
  const { id } = useParams();
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [category, setCategory] = useState("");
  const [deposit, setDeposit] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(`${API}/transactions/${id}`);
        const transaction = response.data;
        setItemName(transaction.item_name);
        setAmount(transaction.amount);
        setDate(transaction.date);
        setFrom(transaction.from);
        setCategory(transaction.category);
        setDeposit(transaction.deposit);
      } catch (error) {
        console.error(error);
        navigate("/NotFound"); // Navigate to a 404 page if the transaction isn't found
      }
    };
    fetchTransaction();
  }, [id, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const transactionData = {
      item_name: itemName,
      amount: amount,
      date: date,
      from: from,
      category: category,
      deposit: deposit,
    };
    try {
      const response = await axios.put(`${API}/transactions/${id}`, transactionData);
      console.log(response.data);
      navigate(`/transactions/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <div>
        <h2>Edit Transaction</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="itemName">
            <Form.Label>Item Name:</Form.Label>
            <Form.Control type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Amount:</Form.Label>
            <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control type="text" value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="from">
            <Form.Label>From:</Form.Label>
            <Form.Control type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="deposit">
            <Form.Label>Deposit:</Form.Label>
            <Form.Control type="text" value={deposit} onChange={(e) => setDeposit(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">💾</Button>
        </Form>
      </div>
    </Container>
  );
};

export default TransactionEdit;
