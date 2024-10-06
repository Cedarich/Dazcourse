import { useState } from "react";
import { PiBellSimpleRingingLight } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { HiSun, HiMoon } from "react-icons/hi";
import { MdMessage, MdUpdate, MdPersonAdd } from "react-icons/md"; // Importing icons for notifications

const user = {
  name: "Big Cedar",
  email: "godwinekoh@gmail.com",
  imageUrl: require("../assests/images/newprof.jpg"),
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const notifications = [
  {
    id: 1,
    message: "New message from John Doe",
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
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="flex items-center space-x-4 z-10">
      {/* Dark Mode Toggle Button */}
      <button
        type="button"
        onClick={toggleDarkMode}
        className="p-1 text-gray-400 hover:text-gray-500 transition-transform transform hover:scale-110 focus:outline-none"
      >
        {darkMode ? (
          <HiSun className="h-6 w-6" />
        ) : (
          <HiMoon className="h-6 w-6" />
        )}
      </button>

      {/* Notification Bell Dropdown */}
      <Menu as="div" className="relative z-10">
        <MenuButton className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 transition-transform transform hover:scale-110 focus:outline-none">
          <span className="sr-only">View notifications</span>
          <PiBellSimpleRingingLight className="h-6 w-6" />
        </MenuButton>
        <MenuItems
          className="absolute left-1/2 z-20 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transform -translate-x-1/2 focus:outline-none"
          as="div"
        >
          <div className="py-1">
            {notifications.map((notification) => (
              <MenuItem key={notification.id}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#7a56d7] text-white" : "text-gray-700",
                      "flex items-center justify-start space-x-2 block px-4 py-2 text-sm transition-colors duration-200 hover:bg-[#9b7fd8] hover:text-white"
                    )}
                  >
                    {notification.icon}
                    <span>{notification.message}</span>
                  </a>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>

      {/* Profile dropdown */}
      <Menu as="div" className="relative z-10">
        <MenuButton className="flex items-center space-x-2 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform transform hover:scale-105">
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
          className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-transform transform scale-95 opacity-0 duration-300 ease-out focus:outline-none"
          as="div"
        >
          {userNavigation.map((item) => (
            <MenuItem key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={classNames(
                    active
                      ? "bg-[#5541D7] text-white transition-transform transform scale-105"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {item.name}
                </a>
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
    <header className="flex justify-between items-center px-4 py-3 bg-white border-b shadow-md sticky top-0 z-30 hover:shadow-glow transition-all duration-300">
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
