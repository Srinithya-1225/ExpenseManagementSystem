import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const AdminExpenseReport = () => {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9797/exp-mng/expense") // API call to get all expenses
      .then((response) => {
        setExpenseData(response.data || []);
      })
      .catch((error) => console.error("Error fetching expenses:", error));
  }, []);

  // Group expenses by category and calculate total amount per category
  const expenseByCategory = expenseData.reduce((acc, expense) => {
    acc[expense.categoryId] = (acc[expense.categoryId] || 0) + expense.amount;
    return acc;
  }, {});

  // Prepare data for the Pie Chart
  const chartData = {
    labels: Object.keys(expenseByCategory), // Category IDs
    datasets: [
      {
        label: "Expense Amount",
        data: Object.values(expenseByCategory), // Amounts
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#2c3e50" }}>Admin Expense Report</h2>
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {Object.keys(expenseByCategory).length > 0 ? (
          <Pie data={chartData} />
        ) : (
          <p>No expense data available</p>
        )}
      </div>
    </div>
  );
};

export default AdminExpenseReport;
