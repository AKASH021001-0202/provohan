import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate =useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Welcome Back!"); 
    setTimeout(() => {
      navigate("/");
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
          <div className="py-7  max-h-min_600 aligncenter_h w-full">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-700">
                Log in to continue
              </h2>
              <p className="text-sm pt-3 text-gray-500">
                Please enter the form to login into this app
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full p-12">
              <div className="mb-4">
              <label
                  for="Telphone"
                  className="block  pb-2  text-sm font-semibold text-gray-700"
                >
                  Enter Phone Number
                </label>
                <div className="flex items-center h-form_height border border-gray-300 bg-white px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-btn_location focus-within:border-btn_location rounded-md">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 text-sm px-3"
                  >
                    <option value="+91">+91</option>
                    <option value="+65">+65</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>
                  <span className="h-full w-px bg-gray-300"></span>
                  <input
                    type="tel"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full border-none focus:ring-0 focus:outline-none px-3 text-sm text-gray-700"
                    placeholder="Enter mobile number"
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-3 mt-4 bg-btn_location text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none  focus:btn_location"
              >
                Log In
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>
                Don't have an account?{" "}
                <Link to={'/Register'} className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
