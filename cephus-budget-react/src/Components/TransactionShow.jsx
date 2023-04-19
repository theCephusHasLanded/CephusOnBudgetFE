import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';

const API = process.env.REACT_APP_API_URL;

const TransactionShow = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((response) => setTransaction(response.data))
      .catch((error) => navigate("/404"));
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then((response) => {
        navigate("/transactions");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!transaction) {
    return <div>Loading...</div>;
  }

  const depositIcon = (isDeposit) => {
    return isDeposit ? "✔️" : "❌";
  };

  return (
    <div>
      <h1>Transaction Details</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{transaction.id || uuidv4()}</td>
          </tr>
          <tr>
            <td>Item Name:</td>
            <td>{transaction.item_name}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{transaction.description}</td>
          </tr>
          <tr>
            <td>Amount:</td>
            <td>{transaction.amount}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{transaction.date}</td>
          </tr>
          <tr>
            <td>From:</td>
            <td>{transaction.from}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{transaction.category}</td>
          </tr>
          <tr>
            <td>Deposit:</td>
            <td>{depositIcon(transaction.deposit)}</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <Link to={`/transactions/${transaction.id}/edit`}><button>Edit</button></Link>{" "}
        <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
};

export default TransactionShow;
