
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import PolicyPage from "./pages/PolicyPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/registerAndLogin/Signin";
import LoginPage from "./pages/registerAndLogin/Login";
import Dashboard from "./pages/user/dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Forgetpassword from "./pages/registerAndLogin/Forgetpassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import UserList from "./pages/admin/UserList";
import ProductView from "./pages/admin/ProductView";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/users" element={<UserList />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<ProductView />} />
        </Route>
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
