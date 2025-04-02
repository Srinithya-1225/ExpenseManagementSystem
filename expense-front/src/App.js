import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./Components/LoginComponent/LoginPage.jsx";
import RegisterUser from "./Components/LoginComponent/RegisterUser.jsx";
import AdminMenu from "./Components/LoginComponent/AdminMenu.jsx";
import CustomerMenu from "./Components/LoginComponent/CustomerMenu.jsx";
import CategoryAddition from "./Components/CategoryComponent/CategoryAddition.jsx";
import AdminCategoryList from "./Components/CategoryComponent/AdminCategoryList.jsx";
import CategoryUpdate from "./Components/CategoryComponent/CategoryUpdate.jsx";
import CustomerCategoryList from "./Components/CategoryComponent/CustomerCategoryList.jsx";
import CustomerAddition from "./Components/CustomerComponent/CustomerAddition.jsx";
import CustomerList from "./Components/CustomerComponent/CustomerList.jsx";
import CustomerUpdate from "./Components/CustomerComponent/CustomerUpdate.jsx";
import CustomerDetails from "./Components/CustomerComponent/CustomerDetails.jsx";
import CustomerCurrent from "./Components/CustomerComponent/CustomerCurrent.jsx";
import ExpenseEntry from "./Components/Expense/ExpenseEntry.jsx";
import ExpenseList from "./Components/Expense/ExpenseList.jsx";
import ExpenseUpdate from "./Components/Expense/ExpenseUpdate.jsx";
import ExpenseReport from "./Components/Expense/ExpenseReport.jsx"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Default Login Route */}
          <Route path="/" element={<LoginPage />} />

          {/* Registration */}
          <Route path="/Register" element={<RegisterUser />} />

          {/* Admin Routes */}
          <Route path="/AdminMenu" element={<AdminMenu />} />

          {/* Customer Routes */}
          <Route path="/CustomerMenu" element={<CustomerMenu />} />
          <Route path="/customer-add" element={<CustomerAddition />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/customer-update/:customerId" element={<CustomerUpdate />} />
          <Route path="/current-customer" element={<CustomerCurrent />} />

          {/* Ensure Customer Details Route has a Dynamic ID */}
          <Route path="/customer-details/:customerId" element={<CustomerDetails />} />

          {/* Category Routes */}
          <Route path="/category-add" element={<CategoryAddition />} />
          <Route path="/admin-category-list" element={<AdminCategoryList />} />
          <Route path="/customer-category-list" element={<CustomerCategoryList />} />
          <Route path="/update-category/:categoryId" element={<CategoryUpdate />} />

          {/* Expense Routes (Placeholder Pages) */}
          <Route path="/expense-entry" element={<ExpenseEntry />} />
          <Route path="/expense-entry/:categoryId" element={<ExpenseEntry />} />
          <Route path="/expenses-list" element={<ExpenseList />} />
          <Route path="/expense-update/:expenseId" element={<ExpenseUpdate />} />
          <Route path="/admin-expense-report" element={<ExpenseReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;