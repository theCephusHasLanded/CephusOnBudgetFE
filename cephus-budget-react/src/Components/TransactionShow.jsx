import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <h2>Transaction Details</h2>
      <p>
        <strong>ID:</strong> {transaction.id}
      </p>
      <p>
        <strong>Description:</strong> {transaction.description}
      </p>
      <p>
        <strong>Amount:</strong> {transaction.amount}
      </p>
      <p>
        <Link to={`/transactions/${transaction.id}/edit`}>Edit</Link>{" "}
        <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
};

export default TransactionShow;
