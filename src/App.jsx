import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import MyLearning from "./pages/MyLearning";
import Settings from "./pages/Settings";
import PrivateRoute from "./ui/PrivateRoute"; // Import the PrivateRoute
import Layout from "./layout/Layout"; // Import the Layout component
import { ModalProvider } from "./services/ModalContext"; // Import ModalProvider

const App = () => {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />

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
    </ModalProvider>
  );
};

export default App;
