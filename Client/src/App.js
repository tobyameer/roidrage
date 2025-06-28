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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Client-Only Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminProducts"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminCategories"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminCategories />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
