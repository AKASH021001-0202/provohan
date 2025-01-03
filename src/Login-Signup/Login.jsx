import React, { useState, useEffect } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./Firebase/firebase";

const Login = () => {
  const [mynumber, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      if (!window.recaptchaVerifier) {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // onSignInSubmit();
          }
        });
 
      }
    } catch (error) {
      console.error("Error initializing RecaptchaVerifier:", error);
      toast.error("Failed to initialize reCAPTCHA. Please try again later.");
    }
  }, []);

  const formatPhoneNumber = (number) => "+91" + number.replace(/\D/g, "").slice(-10);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!mynumber || mynumber.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    const formattedNumber = formatPhoneNumber(mynumber);

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          { size: "invisible", callback: () => console.log("reCAPTCHA verified!") },
          auth
        );
      }

      const result = await signInWithPhoneNumber(auth, formattedNumber, window.recaptchaVerifier);
      setConfirmationResult(result);
      setShowOtpInput(true);
      toast.success("OTP sent successfully!");
    } catch (err) {
      toast.error("Failed to send OTP. Please try again.");
      console.error("Error during sign-in:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleValidateOtp = async (e) => {
    e.preventDefault();
    if (!otp || !confirmationResult) {
      toast.error("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
      toast.success("Login successful!");
      // Redirect or additional logic
    } catch (err) {
      if (err.code === "auth/invalid-verification-code") {
        toast.error("Invalid OTP. Please try again.");
      } else if (err.code === "auth/code-expired") {
        toast.error("OTP has expired. Please request a new one.");
      } else {
        toast.error("Failed to validate OTP. Please try again.");
      }
      console.error("OTP Validation Error:", err);
    } finally {
      setLoading(false);
    }
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
        <div className="w-1/2 py-7">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-700">Log in to continue</h2>
            <p className="text-sm pt-3 text-gray-500">Please enter the form to login into this app</p>
          </div>
          <form className="w-full p-12" onSubmit={showOtpInput ? handleValidateOtp : handleSignIn}>
            {!showOtpInput && (
              <div className="mb-4">
                <label htmlFor="Telphone" className="block pb-2 text-sm font-semibold text-gray-700">
                  Enter Phone Number
                </label>
                <input
                  id="Telphone"
                  type="tel"
                  value={mynumber}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Phone number"
                  className="w-full border px-3 py-2 rounded-md"
                  disabled={loading}
                />
                <div id="recaptcha-container"></div>
              </div>
            )}
            {showOtpInput && (
              <div className="mb-4">
                <label htmlFor="otp" className="block pb-2 text-sm font-semibold text-gray-700">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full border px-3 py-2 rounded-md"
                  disabled={loading}
                />
              </div>
            )}
            <button
              type="submit"
              className={`w-full p-3 mt-4 bg-btn_location text-white rounded-md font-semibold hover:bg-blue-700 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Processing..." : showOtpInput ? "Validate OTP" : "Log In"}
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <Link to={"/Register"} className="text-blue-500 hover:underline">
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
