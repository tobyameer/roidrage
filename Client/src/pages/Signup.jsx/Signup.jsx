import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // 🔐 Custom context for managing auth state

const Signup = () => {
  // 🔧 State variables to store form input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // 🔴 For displaying any error messages

  const navigate = useNavigate(); // 🔁 Used to navigate programmatically after signup
  const { login } = useAuth(); // 🔐 Get login method from AuthContext to set user/token

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors

    // Frontend validation
    if (!email || !password || !firstName || !lastName) {
      setErrorMessage("Fill all required fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      const { token, user } = res.data;
      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        // Store user role

        console.log("Signed up user:", user);
        navigate("/", { state: { user } });
      } else {
        setErrorMessage("User creation failed.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="mt-[300px]">
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className="text-[40px]">SIGN UP</h1>

        <div className="w-full flex flex-col items-center">
          <div className="mt-[40px] flex flex-col gap-5 w-[40%]">
            {/* 👇 Input for first name */}
            <input
              className="text-[25px] pl-5 w-full h-[50px] active:border active:border-gray-400 bg-gray-300/10 rounded-sm"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            {/* 👇 Input for last name */}
            <input
              className="text-[25px] pl-5 w-full h-[50px] border-gray-600 bg-gray-300/10 rounded-sm"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            {/* 👇 Input for email */}
            <input
              className="text-[25px] pl-5 w-full h-[50px] border-gray-600 bg-gray-300/10 rounded-sm"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* 👇 Input for password (type="password" hides the text) */}
            <input
              className="text-[25px] pl-5 w-full h-[50px] border-gray-600 bg-gray-300/10 rounded-sm"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="text-[25px] pl-5 w-full h-[50px] border-gray-600 bg-gray-300/10 rounded-sm"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* 🔘 Submit button */}
            <button
              onClick={handleSignup} // Changed to use handleSignup
              className="Signup-btn w-full h-[50px] text-[25px]"
            >
              CREATE ACCOUNT
            </button>

            {/* ⚠️ Display error message if it exists */}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            {/* 📎 Link to login page if user already has an account */}
            <p className="text-gray-400/50">
              Already have an account?{" "}
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
