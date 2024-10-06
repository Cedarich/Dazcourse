import React from "react";
import { Navigate } from "react-router-dom";

// Mock authentication function (replace this with your real auth check)
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null; // Check if a token is present in localStorage
};

const PrivateRoute = ({ children }) => {
  // If not authenticated, redirect to login
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected content
  return children;
};

export default PrivateRoute;
