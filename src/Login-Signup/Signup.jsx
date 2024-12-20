import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import axios for API calls

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [otpSent, setOtpSent] = useState({ phone: false, email: false });

  const validateForm = () => {
    const { name, email, phone, agree } = formData;

    if (!name) {
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSendOtp = async (type) => {
    const value = formData[type];

    if (!value || (type === "phone" && !/^\d{10}$/.test(value)) || (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
      toast.error(`Please enter a valid ${type}`);
      return;
    }

    try {
      // Simulating OTP sending via API
      await axios.post("https://example.com/api/send-otp", { [type]: value });
      toast.success(`OTP sent successfully to your ${type}!`);
      setOtpSent((prev) => ({ ...prev, [type]: true }));
    } catch (error) {
      toast.error(`Failed to send OTP to your ${type}. Please try again!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // if (!otpSent.phone || !otpSent.email) {
    //   toast.error("Please verify both your email and phone number by sending OTPs!");
    //   return;
    // }

    toast.success("Account created successfully! Redirecting to login...");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="card flex m-4 bg-white rounded-md">
        <div className="w-1/2">
          <div className="bg-[url('https://i.ibb.co/vDRhZP0/df90638e259a358bb56c293fc9f072d9.png')] bg-repeat bg-cover">
            <p className="h-min_600"></p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="py-7 px-10 max-h-min_600 aligncenter_h w-full">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-700">
                Create Your Personal Account
              </h2>
              <p className="text-sm pt-3 text-gray-500">
                Looks like you are new here!{" "}
                <span className="text-firstbar">Sign up to get started</span>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block pb-2 text-sm font-semibold text-gray-700">
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

              <div className="mb-4">
                <label htmlFor="email" className="block pb-2 text-sm font-semibold text-gray-700">
                  Enter Email Address
                </label>
                <div className="flex items-center border border-form_border bg-white px-3 py-1.5 shadow-sm focus-within:ring-1 focus-within:ring-btn_location">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="ml-3 w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => handleSendOtp("email")}
                    className="text-sm font-semibold text-white bg-btn_location border rounded-full w-36 p-2"
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block pb-2 text-sm font-semibold text-gray-700">
                  Enter Phone Number
                </label>
                <div className="flex items-center border border-form_border bg-white px-3 py-1.5 shadow-sm focus-within:ring-1 focus-within:ring-btn_location">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="ml-3 w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => handleSendOtp("phone")}
                    className="text-sm font-semibold text-white bg-btn_location border rounded-full w-36 p-2"
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Please verify both your mobile number and email address through One Time Password.
              </p>

              <div className="mb-6">
                <label className="inline-flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2">
                    By creating an account you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    , and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Seller Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full p-3 mt-4 bg-btn_location text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none"
              >
                Create Account
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>
                Have an account?{" "}
                <a href="/login" className="text-btn_location 
 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
