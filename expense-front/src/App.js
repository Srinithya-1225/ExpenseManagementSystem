import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./Components/LoginComponent/LoginPage";
import RegisterUser from "./Components/LoginComponent/RegisterUser";
import AdminMenu from "./Components/LoginComponent/AdminMenu"; 
import CustomerMenu from "./Components/LoginComponent/CustomerMenu"; 
import CategoryAddition from "./Components/CategoryComponent/CategoryAddition";
import AdminCategoryList from "./Components/CategoryComponent/AdminCategoryList";
import CategoryUpdate from "./Components/CategoryComponent/CategoryUpdate";
import CustomerCategoryList from "./Components/CategoryComponent/CustomerCategoryList";
import CustomerAddition from "./Components/CustomerComponent/CustomerAddition";
import CustomerList from "./Components/CustomerComponent/CustomerList";
import CustomerUpdate from "./Components/CustomerComponent/CustomerUpdate";
import CustomerDetails from "./Components/CustomerComponent/CustomerDetails";
import CustomerCurrent from "./Components/CustomerComponent/CustomerCurrent";
import ExpenseEntry from "./Components/ExpenseComponent/ExpenseEntry"; 
import ExpenseReportAdmin from "./Components/ExpenseComponent/ExpenseReportAdmin";
import ExpenseReportCustomer from "./Components/ExpenseComponent/ExpenseReportCustomer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterUser />} />
          
          <Route path="/AdminMenu" element={<AdminMenu />} />
          <Route path="/CustomerMenu" element={<CustomerMenu />} />
          <Route path="/customer-add" element={<CustomerAddition />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/customer-update/:customerId" element={<CustomerUpdate />} />
          <Route path="/current-customer" element={<CustomerCurrent />} />
          <Route path="/customer-details/:customerId" element={<CustomerDetails />} />
          <Route path="/category-add" element={<CategoryAddition />} />
          <Route path="/admin-category-list" element={<AdminCategoryList />} />
          <Route path="/customer-category-list" element={<CustomerCategoryList />} />
          <Route path="/update-category/:categoryId" element={<CategoryUpdate />} />
          
          {/* Expense Routes */}
          <Route path="/expense-entry" element={<ExpenseEntry />} />
          <Route path="/reports" element={<ExpenseReportAdmin />} />
          <Route path="/expense-report" element={<ExpenseReportCustomer />} />

          <Route path="/profile" element={<h2>Profile Page</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
