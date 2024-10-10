import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { MdMessage, MdUpdate, MdPersonAdd } from "react-icons/md";
import { FaUser, FaCog, FaSignOutAlt, FaHeart } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";

const user = {
  name: "Big Cedar",
  email: "godwinekoh@gmail.com",
  imageUrl: require("../assests/images/newprof.jpg"),
};

const userNavigation = [
  {
    name: "Your Profile",
    href: "/learning",
    icon: <FaUser className="h-4 w-4" />,
  },
  { name: "Settings", href: "/settings", icon: <FaCog className="h-4 w-4" /> },
  { name: "Sign out", icon: <FaSignOutAlt className="h-4 w-4" /> },
];

const notifications = [
  {
    id: 1,
    message: "New message from Cyber",
    icon: <MdMessage className="h-4 w-4" />,
  },
  {
    id: 2,
    message: "Your profile was updated",
    icon: <MdUpdate className="h-4 w-4" />,
  },
  {
    id: 3,
    message: "New connection request",
    icon: <MdPersonAdd className="h-4 w-4" />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NotificationAndUser() {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBellClicked, setIsBellClicked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleBell = () => {
    setIsBellClicked(!isBellClicked);
  };

  const handleSignOut = () => {
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");
    if (confirmSignOut) {
      localStorage.removeItem("userData");
      navigate("/");
    }
  };

  const handleNavigation = (href) => {
    if (href) {
      navigate(href);
    }
  };

  const hoverStyle =
    "hover:bg-[#9b7fd8] hover:text-white transition-colors duration-200";

  return (
    <div className="flex items-center space-x-4 z-10">
      <button
        type="button"
        onClick={toggleLike}
        className="p-1 text-gray-400 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
      >
        <FaHeart
          className={`text-2xl transition-all duration-300 transform ${
            isLiked ? "text-red-500 scale-110" : "text-gray-400"
          }`}
        />
      </button>

      <Menu as="div" className="relative z-10">
        <MenuButton
          onClick={toggleBell}
          className={`flex-shrink-0 rounded-full bg-white p-1 transition-colors duration-300 focus:outline-none`}
        >
          <span className="sr-only">View notifications</span>
          <BsBellFill
            className={`h-6 w-6 ${
              isBellClicked ? "text-[#9b7fd8]" : "text-gray-400"
            }`}
          />
        </MenuButton>
        <MenuItems
          className="absolute left-1/2 z-20 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transform -translate-x-1/2 focus:outline-none"
          as="div"
        >
          <div className="py-1">
            {notifications.map((notification) => (
              <MenuItem key={notification.id}>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "bg-[#7a56d7] text-white" : "text-gray-700",
                      "flex items-center justify-start space-x-2 px-4 py-2 text-sm " +
                        hoverStyle // Removed block
                    )}
                    onClick={() => toggleBell()} // Close dropdown on click
                  >
                    {notification.icon}
                    <span>{notification.message}</span>
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>

      <Menu as="div" className="relative z-10">
        <MenuButton className="flex items-center space-x-2 rounded-full bg-white border-2 border-transparent hover:border-[#7a56d7] transition-colors duration-300 focus:outline-none">
          <img
            alt="User Profile"
            src={user.imageUrl}
            className="h-8 w-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium text-left">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </MenuButton>
        <MenuItems
          className="absolute right-0 z-20 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ease-out focus:outline-none"
          as="div"
        >
          {userNavigation.map((item) => (
            <MenuItem key={item.name}>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-[#7a56d7] text-white" : "text-gray-700",
                    "flex items-center gap-1 w-full px-4 py-2 text-sm " + // Set w-full to make the button take full width
                      hoverStyle
                  )}
                  onClick={() => {
                    if (item.name === "Sign out") {
                      handleSignOut();
                    } else {
                      handleNavigation(item.href);
                    }
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}

function Navbar({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white border-b shadow-md sticky top-0 z-30">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 focus:outline-none"
        >
          <IoMdMenu className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <NotificationAndUser />
      </div>
    </header>
  );
}

export default Navbar;
