import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const TransactionEdit = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(`${API}/transactions/${id}`);
        const transaction = response.data;
        setDescription(transaction.description);
        setAmount(transaction.amount);
      } catch (error) {
        console.error(error);
        navigate("/NotFound"); // Navigate to a 404 page if the transaction isn't found
      }
    };
    fetchTransaction();
  }, [id, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const transactionData = { description, amount };
    try {
      const response = await axios.put(`${API}/transactions/${id}`, transactionData);
      console.log(response.data);
      navigate(`/transactions/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TransactionEdit;
