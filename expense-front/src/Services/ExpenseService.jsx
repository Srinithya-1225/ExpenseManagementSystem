import axios from "axios";

const BASE_URL = "http://localhost:9797/exp-mng";
const URL="http://localhost:9797/exp-mng/expenses";

// Fetch all expenses
export const getAllExpenses = () => axios.get(`${BASE_URL}/expenses`);

// Generate a new expense number
export const generateExpenseNumber = () => axios.get(`${BASE_URL}/expense-number`);

// Fetch expenses for the logged-in customer
export const getExpensesByCustomer = () => axios.get(`${BASE_URL}/expense-cust`);

// Fetch expenses by a specific customer ID
export const getExpensesByCustomerId = (customerId) => axios.get(`${BASE_URL}/expense-cust/${customerId}`);

// Fetch expenses for a specific category
export const getExpensesByCategory = (categoryId) => axios.get(`${BASE_URL}/expense-cat/${categoryId}`);

// Save a new expense
export const saveExpense = (expense) => axios.post(`${BASE_URL}/add-expense`, expense);

// Update an existing expense by ID
export const updateExpense = (expenseId, expense) => axios.put(`${BASE_URL}/update-expense/${expenseId}`, expense);

// Fetch an expense by its ID
export const getExpenseById = (expenseId) => axios.get(`${BASE_URL}/expense/${expenseId}`);

// Delete an expense by its ID
export const deleteExpenseById = (expenseId) => axios.delete(`${BASE_URL}/expense/delete/${expenseId}`);
 
export const getExpensesReportByCustomer=()=>{
    return axios.get(`${URL}`);
}
export const getExpensesReportByCustomerId=(id)=>{
    return axios.get(`${URL}/id`);
}