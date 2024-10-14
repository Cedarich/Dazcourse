import React, { useEffect, useState } from "react"; // Import useEffect
import { useNavigate } from "react-router-dom";

import Loginbg from "../assests/images/Loginbg.jpg";
import NoiseTexture from "../assests/images/NoiseTexture.jpg";
import { MdOutlineMailLock } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import Preloader from "../features/Preloader";
import Logo from "../assests/svgs/Logo.svg";
import daz from "../assests/svgs/daz.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showLogo, setShowLogo] = useState(false); // State for logo visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger logo visibility after component mounts
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 400); // Delay before showing the logo

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@gmail")) {
      setError("Email must contain @gmail");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    console.log("Login successful:", { email, password });
    setLoading(true);

    // Set the user's email and name in local storage
    localStorage.setItem(
      "userData",
      JSON.stringify({
        name: "User Name", // Replace with actual name or fetch it from your API
        email: email,
      })
    );

    localStorage.setItem("token", "user-authenticated-token");

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 3000);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 500);
    handleSubmit(e);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-500 ease-in-out relative bg-cover bg-center bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(34, 34, 34, 0.7), rgba(0, 0, 0, 0.7)), url(${Loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${NoiseTexture})`,
          opacity: 0.1,
        }}
      ></div>

      <div
        className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-sm mx-4 sm:mx-auto relative z-10 transition-transform transform hover:scale-105 hover:shadow-2xl group"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.3)",
          position: "relative",
        }}
      >
        <div
          className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-gradient-to-r group-hover:from-[#5933d2] group-hover:to-[#7A4DD2] transition-all duration-500 ease-in-out pointer-events-none"
          style={{
            zIndex: "-1",
          }}
        ></div>

        {/* Logo Section with Animation */}
        <div
          className={`flex items-center justify-center gap-1 ${
            showLogo ? "animate-logo" : "opacity-0"
          }`}
        >
          <img
            src={Logo}
            alt="Logo"
            className="transition-opacity duration-500"
          />

          <span>
            <img
              src={daz}
              alt="DazCourse"
              className="transition-opacity duration-500"
            />
          </span>
        </div>

        <div className="mt-12">
          {error && <p className="text-red-600 mb-4">{error}</p>}

          {/* <div className="mb-4">
            <div className="flex items-center border-b-2 border-gray-300 py-2 gap-2">
              <MdOutlineMailLock className="text-2xl text-gray-300" />
              <input
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#ffffff",
                }}
                className="appearance-none w-full mr-3 py-1 leading-tight focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 hover:border-blue-500 focus:border-blue-500"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div> */}
          <div className="mb-4">
            <div className="flex items-center border-b-2 border-gray-300 py-2 gap-2">
              <MdOutlineMailLock
                className={`text-2xl text-gray-300 transition-transform duration-300 ease-in-out transform ${
                  email.length > 0 ? "text-[#7a56d7]" : "text-gray-300"
                }`}
                id="mailIcon"
              />
              <input
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#ffffff",
                }}
                className="appearance-none w-full mr-3 py-1 leading-tight focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 hover:border-[#7a56d7] focus:border-[#7a56d7]"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onFocus={() => {
                  const mailIcon = document.getElementById("mailIcon");
                  mailIcon.classList.add("animate-bounce");
                  mailIcon.classList.add("text-[#7a56d7]");
                }}
                onBlur={() => {
                  const mailIcon = document.getElementById("mailIcon");
                  if (!email) {
                    mailIcon.classList.remove(
                      "animate-bounce",
                      "text-[#7a56d7]"
                    );
                  }
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <style>
            {`
    .animate-bounce {
      animation: bounce 0.6s ease-in-out;
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
        color: #7a56d7;
      }
      50% {
        transform: translateY(-10px);
        color: #7a56d7;
      }
    }
  `}
          </style>

          <div className="mb-6">
            <div className="flex items-center border-b-2 border-gray-300 py-2 gap-2 relative">
              <GiPadlock
                className={`text-2xl text-gray-300 transition-transform duration-300 ease-in-out transform ${
                  password.length > 0
                    ? "text-[#7a56d7] animate-bounce"
                    : "text-gray-300"
                }`}
                id="lockIcon"
              />
              <input
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#ffffff",
                }}
                className="appearance-none w-full mr-3 py-1 leading-tight focus:outline-none transition duration-200 ease-in-out placeholder:text-gray-400 hover:border-[#7a56d7] focus:border-[#7a56d7]"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onFocus={() => {
                  const lockIcon = document.getElementById("lockIcon");
                  lockIcon.classList.add("animate-bounce");
                  lockIcon.classList.add("text-[#7a56d7]");
                }}
                onBlur={() => {
                  const lockIcon = document.getElementById("lockIcon");
                  if (!password) {
                    lockIcon.classList.remove(
                      "animate-bounce",
                      "text-[#7a56d7]"
                    );
                  }
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-0 inset-y-0 flex items-center px-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <VscEyeClosed className="text-2xl text-gray-300" />
                ) : (
                  <VscEye className="text-2xl text-gray-300" />
                )}
              </div>
            </div>
          </div>

          <style>
            {`
    .animate-bounce {
      animation: bounce 0.6s ease-in-out;
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
        color: #7a56d7;
      }
      50% {
        transform: translateY(-10px);
        color: #7a56d7;
      }
    }
  `}
          </style>

          <div className="flex justify-between items-center mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-sm text-gray-200">Remember me</span>
            </label>
            <span className="text-sm text-gray-200 hover:text-blue-600">
              Forgot Password?
            </span>
          </div>

          <button
            onClick={handleButtonClick}
            className={`bg-gradient-to-r from-[#5933d2] to-[#7A4DD2] text-white font-bold py-2 px-4 rounded-xl w-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#5933d2] ${
              isBouncing ? "bounce" : ""
            }`}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
