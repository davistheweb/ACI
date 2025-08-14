import React from "react";

export const PageUnavaliable: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Page not avaiable</h1>
      <p className="text-xl text-gray-600 mb-4">
        Oops! This page is under developement
      </p>
      <a href="/" className="text-blue-500 hover:text-blue-700 underline">
        Return to Home
      </a>
    </div>
  </div>
);
