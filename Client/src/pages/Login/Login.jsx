import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      const { token, user } = res.data;

      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        const redirectTo = user.role === "admin" ? "/admin" : "/";
        navigate(redirectTo);
      } else {
        setErrorMessage("Invalid credentials.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="mt-[300px]">
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className="text-[40px]">LOGIN</h1>

        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}

        <div className="w-full flex flex-col items-center">
          <div className="mt-[40px] flex flex-col gap-5 w-[40%]">
            <input
              className="text-[25px] pl-5 w-full h-[50px] border border-gray-400 bg-gray-300/10 rounded-sm"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="text-[25px] pl-5 w-full h-[50px] border border-gray-400 bg-gray-300/10 rounded-sm"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="login-btn w-full h-[50px] text-[25px]"
            >
              LOGIN
            </button>

            <p className="text-gray-400/50">
              Don’t have an account?{" "}
              <Link to="/signup" className="hover:text-white">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
