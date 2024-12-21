"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS for styles

export default function Dummy() {
  const [open, setOpen] = useState(true);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate mobile number
    if (!/^\d{10}$/.test(mobileNumber)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Simulate login success
    toast.success("Welcome Back!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />

      <div className="fixed container  mx-auto inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full   bg-white shadow-lg">
            <ToastContainer />

            <div className="card flex bg-white ">
              {/* Left Side Image */}
              <div className="w-1/2 rounded-lg ">
                <div className="bg-[url('https://i.ibb.co/vDRhZP0/df90638e259a358bb56c293fc9f072d9.png')] bg-cover bg-center h-login_form  w-full" />
              </div>

              {/* Right Side Form */}
              <div className="w-1/2 py-7 px-6  ">
                <div className="text-center mb-6 ">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex justify-end rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.497 0.503006C18.1677 1.17382 18.1677 2.26124 17.497 2.93205L2.93205 17.497C2.26124 18.1677 1.17382 18.1677 0.503006 17.497C-0.167669 16.8262 -0.167669 15.7388 0.503006 15.0679L15.0679 0.503006C15.7388 -0.167669 16.8262 -0.167669 17.497 0.503006Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.503006 0.503006C1.17382 -0.167669 2.26124 -0.167669 2.93205 0.503006L17.497 15.0679C18.1677 15.7388 18.1677 16.8262 17.497 17.497C16.8262 18.1677 15.7388 18.1677 15.0679 17.497L0.503006 2.93205C-0.167669 2.26124 -0.167669 1.17382 0.503006 0.503006Z"
                        fill="black"
                      />
                    </svg>
                  </button>

                  <h2 className="text-3xl font-semibold text-gray-700">
                    Log in to continue
                  </h2>
                  <p className="text-sm pt-3 text-gray-500">
                    Please enter the form to log into this app
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                  <div className="mb-4">
                    <label className="block pb-2 text-sm font-semibold text-gray-700">
                      Enter Phone Number
                    </label>
                    <div className="flex items-center h-12 border border-gray-300 bg-white px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 rounded-md">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 text-gray-700 text-sm px-3"
                      >
                        <option value="+91">+91</option>
                        <option value="+65">+65</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                      </select>
                      <span className="h-full w-px bg-gray-300" />
                      <input
                        type="tel"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full border-none focus:ring-0 px-3 text-sm text-gray-700"
                        placeholder="Enter mobile number"
                        required
                        pattern="\d{10}"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
                  >
                    Log In
                  </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-500 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
