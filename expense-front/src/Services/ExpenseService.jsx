import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/expenses";

class ExpenseService {
  addExpense(expense) {
    return axios.post(`${BASE_URL}/add`, expense);
  }

  getAllExpenses() {
    return axios.get(`${BASE_URL}/all`);
  }

  getExpensesByCustomer(customerId) {
    return axios.get(`${BASE_URL}/customer/${customerId}`);
  }
}

export default new ExpenseService();
