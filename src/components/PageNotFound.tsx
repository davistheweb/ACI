import React from "react";
import { Link } from "react-router";

export const PageNotFound: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
      <Link
        to="/"
        className="text-white bg-church-brown p-2 hover:bg-church-brown-light transition-transform duration-200 hover:scale-120 rounded-sm"
      >
        Return to Home
      </Link>
    </div>
  </div>
);
