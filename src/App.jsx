import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import MyLearning from "./pages/MyLearning";
import Settings from "./pages/Settings";
import PrivateRoute from "./ui/PrivateRoute"; // Import the PrivateRoute
import Layout from "./layout/Layout"; // Import the Layout component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes using Layout */}
        <Route
          element={
            <PrivateRoute>
              <Layout /> {/* This ensures Sidebar and Navbar are rendered */}
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/learning" element={<MyLearning />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
