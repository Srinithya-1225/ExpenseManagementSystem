import React, { useEffect, useState } from 'react';
import ExpenseService from '../../Services/ExpenseService';

function ExpenseReportCustomer() {
  const [expenses, setExpenses] = useState([]);
  const customerId = 1; // Replace with actual customer ID

  useEffect(() => {
    ExpenseService.getExpensesByCustomer(customerId)
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer expense report:", error);
      });
  }, []);

  return (
    <div>
      <h2>Customer Expense Report</h2>
      {expenses.map((expense) => (
        <p key={expense.id}>{expense.description} - ${expense.amount}</p>
      ))}
    </div>
  );
}

export default ExpenseReportCustomer;
