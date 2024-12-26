import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="https://i.ibb.co/JBKrRBq/404.png"
        alt="404 Not Found"
        className="w-72 h-72 object-contain mb-6"
      />
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={goHome}
        className="px-6 py-2 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 focus:outline-none"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
