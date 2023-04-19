import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
    <div>
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="from">From:</label>
          <input type="text" id="from" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label htmlFor="deposit">Deposit:</label>
          <input type="text" id="deposit" value={deposit} onChange={(e) => setDeposit(e.target.value)} />
        </div>
        <button type="submit">💾</button>
      </form>
    </div>
  );
};

export default TransactionEdit;
