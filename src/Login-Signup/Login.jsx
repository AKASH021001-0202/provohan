import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { userLogindata } from "../apis/auth";

const Login = () => {
  const [mynumber, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!mynumber || mynumber.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
  
    setLoading(true);
  
    try {
      // Assuming userLogindata is correctly set up to receive phone number
      const loginResponse = await userLogindata({ phone: mynumber }); // Pass phone number correctly in the payload
  
      if (loginResponse.code === 0) {
        dispatch(setUser(loginResponse)); // Assuming response contains user data
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", loginResponse.token);
        localStorage.setItem("id", loginResponse.userId);  // Use userId instead of id
        toast.success(`Logged in with phone number: ${mynumber}`);
        
        navigate("/"); // Redirect to home
      } else {
        toast.error("User not found");
      }
    } catch (err) {
      toast.error("Failed to log in. Please try again.");
      console.error("Error during sign-in:", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="card flex m-4 flex-wrap bg-white rounded-[50px]">
        <div className="w-full md:w-1/2 rounded-md">
          <div className="bg-[url('https://i.ibb.co/vDRhZP0/df90638e259a358bb56c293fc9f072d9.png')] bg-repeat bg-cover">
            <p className="min-h-[550px]"></p>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-7">
          <div className="flex flex-col items-center justify-center my-auto h-[100%]">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-700">Log in to continue</h2>
              <p className="text-sm pt-3 text-gray-500">Please enter the form to login into this app</p>
            </div>
            <form className="w-full p-12" onSubmit={handleSignIn}>
              <div className="mb-4">
                <label htmlFor="Telphone" className="block pb-2 text-sm font-semibold text-gray-700">
                  Enter Phone Number
                </label>
                <div className="flex items-center h-form_height border border-form_border bg-white px-3 py-1.5 shadow-sm focus-within:ring-1 focus-within:ring-btn_location">
                  <input
                    id="Telphone"
                    type="tel"
                    value={mynumber}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Phone number"
                    className="w-full border px-3 py-2 rounded-md outline-none"
                    disabled={loading}
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`w-full p-3 mt-4 bg-btn_location text-white rounded-md font-semibold hover:bg-blue-700 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Processing..." : "Log In"}
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
    </div>
  );
};

export default Login;
