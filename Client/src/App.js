import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import ScrollToTop from "./pages/ScrollToTop";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup.jsx/Signup";
import Admin from "./pages/admin/Admin";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCategories from "./pages/admin/AdminCategories";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/adminCategories'" element={<AdminCategories />} />
      </Routes>
    </>
  );
}

export default App;
