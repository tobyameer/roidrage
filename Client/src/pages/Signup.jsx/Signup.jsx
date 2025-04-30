import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mt-[300px]">
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className="text-[40px]">SIGN UP</h1>
        <div className="w-full flex flex-col items-center">
          <div className="mt-[40px] flex flex-col gap-5 w-[40%]">
            <input
              className="text-[25px] pl-5 w-[full] h-[50px] active:border active:border-gray-400 bg-gray-300/10 rounded-sm"
              type="text"
              placeholder="First Name"
            />
            <input
              className="text-[25px] pl-5 w-[full] h-[50px] border-gray-600 bg-gray-300/10 rounded-sm"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="text-[25px] pl-5 w-[full] h-[50px] border-gray-600 bg-gray-300/10 rounded-sm"
              type="text"
              placeholder="E-mail"
            />
            <input
              className="text-[25px] pl-5 w-[full] h-[50px] border-gray-600 bg-gray-300/10 rounded-sm"
              type="text"
              placeholder="Password"
            />
            <Link to="/" className="w-full">
              <button className="Signup-btn w-full h-[50px] text-[25px]">
                CREATE ACCOUNT
              </button>
            </Link>
            <p className="text-gray-400/50">
              Already have an account?{" "}
              <Link to="/login">
                <a className="hover:text-white">Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
