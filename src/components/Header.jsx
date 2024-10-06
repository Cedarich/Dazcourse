import {
  BellIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const userNavigation = [
  { name: "Jeremy Solosa responded to your review.", href: "#" },
  { name: "Scott James responded to your review.", href: "#" },
  { name: "Steffani Putri responded to your review.", href: "#" },
  { name: "Kirana Larasati responded to your review.", href: "#" },
];

export default function Header({ setSidebarOpen }) {
  return (
    <div className="sticky top-0 flex items-center justify-between lg:px-12 py-2 px-4 bg-white border-b border-gray-200 shadow-sm ">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 mr-4 lg:hidden"
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="relative flex-1 hidden lg:block">
        <span>DaBoss</span>
      </div>
      <div className="flex items-center gap-x-4">
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center">
            <BellIcon className="h-6 w-6 text-gray-400 hover:border-[#5541D7] " />
          </MenuButton>
          <MenuItems className="absolute right-0 mt-4 w-72 p-4 rounded-md bg-white shadow-lg">
            <h1>Notification</h1>
            {userNavigation.map((item) => (
              <MenuItem key={item.name}>
                <a href={item.href} className="block px-4 py-2 text-sm">
                  {item.name}
                </a>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
