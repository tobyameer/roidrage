import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import ScrollToTop from "./pages/ScrollToTop";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup.jsx/Signup";

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
      </Routes>
    </>
  );
}

export default App;
