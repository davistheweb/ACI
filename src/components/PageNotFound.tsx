import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export const PageNotFound: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
      <Link to="/">
        <Button className="text-white bg-church-brown p-2 hover:bg-church-brown-light transition-transform duration-500 hover:scale-105 rounded-sm">
          Return to Home
        </Button>
      </Link>
    </div>
  </div>
);
