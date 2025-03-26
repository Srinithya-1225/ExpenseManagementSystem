import React, { useEffect, useState } from 'react';
import ExpenseService from '../../Services/ExpenseService';

function ExpenseReportAdmin() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    ExpenseService.getAllExpenses()
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching expense report:", error);
      });
  }, []);

  return (
    <div>
      <h2>Admin Expense Report</h2>
      {expenses.map((expense) => (
        <p key={expense.id}>{expense.description} - ${expense.amount}</p>
      ))}
    </div>
  );
}

export default ExpenseReportAdmin;
