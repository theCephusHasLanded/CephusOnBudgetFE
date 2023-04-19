import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const API = process.env.REACT_APP_API_URL;

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.log(error));
  }, []);

  const depositIcon = (isDeposit) => {
    return isDeposit ? "✔️" : "❌";
  };

  const getTransactionClass = (isDeposit) => {
    return isDeposit ? "table-success" : "table-danger";
  };

  const total = transactions.reduce((acc, transaction) => {
    const amount = transaction.deposit ? transaction.amount : -transaction.amount;
    return acc + amount;
  }, 0);

  const totalClass = total >= 100 ? "text-success" : total >= 0 ? "text-warning" : "text-danger";

  return (
    <div>
      <h1>Transaction List</h1>
      <p className={totalClass}>Bank Account Total: {total}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>From</th>
            <th>Category</th>
            <th>Deposit</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className={getTransactionClass(transaction.deposit)}>
              <td><Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link></td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>{transaction.from}</td>
              <td>{transaction.category}</td>
              <td>{depositIcon(transaction.deposit)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionList;
