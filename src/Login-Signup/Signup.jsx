import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { userRegisterdata } from "../apis/auth";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const { name, email, phone, agree } = formData;
    if (!name.trim()) {
      toast.error("Name is required!");
      return false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Valid email is required!");
      return false;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      toast.error("Valid 10-digit phone number is required!");
      return false;
    }
    if (!agree) {
      toast.error("You must agree to the terms and conditions!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await userRegisterdata(formData);

      dispatch(setUser(response.data));
      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      toast.error(
        `Registration failed: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <div className="container mx-auto py-10 px-5 bg-neutral min-h-screen">
      <ToastContainer />
      <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side with Image */}
        <div className="w-1/2 bg-[url('https://i.ibb.co/vDRhZP0/df90638e259a358bb56c293fc9f072d9.png')] bg-cover"></div>

        {/* Right Side with Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-btn_location mb-6">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block pb-2 text-sm font-semibold text-gray-700"
              >
                Enter Your Name
              </label>
              <div className="flex items-center h-form_height border border-form_border bg-white px-3 py-1.5 shadow-sm focus-within:ring-1 focus-within:ring-btn_location">
                <input
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="ml-3 w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block pb-2 text-sm font-semibold text-gray-700"
              >
                Enter Email Address
              </label>
              <div className="flex items-center border h-form_height border-form_border bg-white px-3 py-1.5 shadow-sm focus-within:ring-1 focus-within:ring-btn_location">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="ml-3 w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block pb-2 text-sm font-semibold text-gray-700"
              >
                Enter Phone Number
              </label>
              <div className="flex items-center border h-form_height border-form_border bg-white px-3 py-1.5 shadow-sm focus-within:ring-1 focus-within:ring-btn_location">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="ml-3 w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3 outline-none">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleInputChange}
                className="w-5 h-5 border border-gray-300 rounded text-btn_location outline-none"
              />
              <label className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-btn_location underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-btn_location underline">
                  Privacy Policy
                </Link>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-btn_location rounded-lg hover:bg-opacity-90"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
