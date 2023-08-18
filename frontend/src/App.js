
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import PolicyPage from "./pages/PolicyPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/registerAndLogin/Signin";
import LoginPage from "./pages/registerAndLogin/Login";
import Dashboard from "./pages/user/dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import Forgetpassword from "./pages/registerAndLogin/Forgetpassword";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} /></Route>
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
