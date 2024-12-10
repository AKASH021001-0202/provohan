import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTPVerification = ({ mobileNumber = "+91 8765432100" }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendDisabled, setResendDisabled] = useState(false);
  const navigate = useNavigate();

  const handleOtpChange = (e, index) => {
    const { value } = e.target;

    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some((digit) => digit === "")) {
      toast.error("Please fill in all the OTP fields.");
      return;
    }
    toast.success("OTP Verified Successfully"), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        };
    console.log(`OTP Entered: ${otp.join("")}`);
    setTimeout(() => {
        navigate("/login");
      }, 2000);
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]); // Reset OTP fields
    setResendDisabled(true);
    const firstInput = document.getElementById("otp-0");
    if (firstInput) firstInput.focus(); // Reset focus to the first input
    toast.info("OTP has been resent.");
    setTimeout(() => setResendDisabled(false), 30000);
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      <div className="bg-white p-8 rounded-lg shadow-otp w-3/6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          OTP Verification
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter OTP sent to{" "}
          <span className="text-purple-600">{mobileNumber}</span>
        </p>

        <p className="text-center text-sm text-gray-600 mb-4">
          You can enter the OTP manually below.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-10 items-center justify-center mb-6">
          {otp.map((digit, index) => (
            <input
              id={`otp-${index}`}
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              aria-label={`Enter OTP digit ${index + 1}`}
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </form>

        <div className="text-center mb-6">
          <button
            onClick={handleResend}
            className={`text-sm ${
              resendDisabled ? "text-gray-400" : "text-purple-600 hover:underline"
            }`}
            disabled={resendDisabled}
          >
            Resend OTP
          </button>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full p-3 mt-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
