import React, { useState } from 'react';
import ExpenseService from '../../Services/ExpenseService';

function ExpenseEntry() {
  const [expenseData, setExpenseData] = useState({ description: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({ ...expenseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ExpenseService.addExpense(expenseData)
      .then((response) => {
        console.log("Expense added successfully!", response.data);
        setExpenseData({ description: '', amount: '' });
      })
      .catch((error) => {
        console.error("Error adding expense:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={expenseData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="amount"
        value={expenseData.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseEntry;
