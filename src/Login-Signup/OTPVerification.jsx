import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const OTPVerification = () => {
  const { state } = useLocation(); // Get phone number from navigation state
  const { phone } = state || {};
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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
      toast.error("Please enter all 6 OTP digits.");
      return;
    }

    const enteredOtp = otp.join("");

    window.confirmationResult
      .confirm(enteredOtp)
      .then((result) => {
        console.log("OTP Verified Successfully:", result.user);
        toast.success("OTP Verified Successfully!");
        navigate("/dashboard"); // Navigate to dashboard or another page
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error.message);
        toast.error("Invalid OTP. Please try again.");
      });
  };

  const handleResend = () => {
    toast.info("OTP has been resent.");
    setOtp(["", "", "", "", "", ""]); // Reset OTP fields
    const firstInput = document.getElementById("otp-0");
    if (firstInput) firstInput.focus(); // Reset focus to the first input
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          OTP Verification
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter the OTP sent to <span className="text-purple-600">{phone}</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-btn_location"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-btn_location text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none"
          >
            Verify OTP
          </button>
        </form>
        <div className="text-center mt-6">
          <button
            onClick={handleResend}
            className="text-sm text-blue-600 hover:underline"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
