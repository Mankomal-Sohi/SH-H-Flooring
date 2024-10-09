import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const navigation = [
  // { name: 'Dashboard', href: '#' },
  { name: "Financing", href: "/Financing" },
  { name: "Reviews", href: "/Reviews" },
  { name: "Inspiration", href: "/Inspiration" },
  { name: "Contact", href: "/Contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-between items-center m-auto p-4">
        {/* Address Section */}
        <div className="address text-xs lg:text-sm text-center md:text-left mb-4 md:mb-0">
          111 Portage Ave, Saint Eustache, MB R0H 1H0 <br /> (For Appointment
          only)
          <span className="flex justify-center text-xs lg:text-sm md:justify-start gap-6 items-center cursor-pointer text-red-500 hover:text-red-700 ">
            <FaPhoneAlt /> 604-554-6789
          </span>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center items-center logo mb-4 md:mb-0">
          <Link href="#">
            <img
              className="h-20 w-20 md:h-28 md:w-28"
              src="logo.svg"
              alt="logo"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search flex gap-2 w-full md:w-auto">
          <input
            type="text"
            className="block w-full md:w-64 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="What are you looking for?"
            required
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="md:h-[0.5px] md:bg-black"></div>

      <div>
        <Disclosure as="nav" className="bg-white">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-0">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch ">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Dropdown menu for Dashboard */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-400">
                          Products
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          <NavLink
                            to="/Carpet"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Carpet
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/carpetTile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Carpet Tile
                          </NavLink>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                    {/* Dropdown mwnu for Services */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-400">
                          <NavLink to="/Services">Services</NavLink>

                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          <NavLink
                            to="/KitchenRemodeling"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Kitchen Remodeling
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/BathroomRemodeling"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Bathroom Remodeling
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/ResidentialPainting"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Residential Painting
                          </NavLink>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                    {navigation.map((item, index) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          "text-gray-700",
                          "rounded-md px-3 py-2 text-sm font-medium",
                          "hover:text-green-400"
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    {/* Dropdown for About Us */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-400">
                          About Us
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          <NavLink
                            to="/Location"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Location
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/ShopAtHome"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Shop At Home
                          </NavLink>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    "text-gray-700",
                    "font-bold",
                    "rounded-md px-3 py-2 text-sm font-medium",
                    "hover:text-green-400"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div className="md:h-[0.5px] md:bg-black md:mb-6"></div>
    </>
  );
};

export default Header;
