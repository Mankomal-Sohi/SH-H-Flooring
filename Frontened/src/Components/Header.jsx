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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPhoneAlt } from "react-icons/fa";

const navigation = [
  { name: "Reviews", href: "/Reviews" },
  { name: "Contact", href: "/Contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <>
      <div className="relative container flex flex-col md:flex-row items-center justify-between m-auto px-4">
        {/* Address Section (Hidden on Small Screens) */}
        <div className="address hidden md:block text-xs md:text-lg text-left mb-4 md:mb-0 w-full md:w-auto mt-1">
          Findlay Creek, Ottawa, K1X 0J3 <br /> (For Appointment only)
          <a
            href="tel:3433337127"
            className="flex gap-2 items-center text-red-500 hover:text-red-700 text-sm lg:text-lg cursor-pointer mt-2"
          >
            <FaPhoneAlt /> 343-333-7127
          </a>
        </div>

        {/* Logo Section */}
        <div className="absolute my-1 left-1/2 transform -translate-x-1/2">
          <Link href="#">
            <img
              className="h-20 w-20 md:h-24 md:w-24"
              src="logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <button className="text-white bg-black font-medium static p-2 rounded-md text-sm hover:text-green-400 flex justify-center items-center">
          <NavLink to="/Login">Login</NavLink>
        </button>

        {/* Phone and Login Section (On Same Line) */}
        <div className="flex items-center gap-4 md:hidden absolute right-4 top-4">
          <a
            href="tel:3433337127"
            className="text-red-500 hover:text-red-700 flex items-center gap-2 text-lg"
          >
            <FaPhoneAlt />
          </a>
          <button className="text-white bg-black font-medium p-2 rounded-md text-sm hover:text-green-400 flex justify-center items-center">
            <NavLink to="/Login">Login</NavLink>
          </button>
        </div>
      </div>

      <div>
        <Disclosure as="nav" className="bg-white md:bg-black">
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
                  <div className="flex space-x-4 ">
                    {/* Dropdown menu for Dashboard */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:text-green-400">
                          Products
                          <ChevronDownIcon
                            className="mr-1 ml-2 h-5 w-5"
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
                        <MenuItem>
                          <NavLink
                            to="/Hardwood"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Hardwood
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/Laminate"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Laminate
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/Vinyl"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Vinyl
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/Paint"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Paint
                          </NavLink>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                    {/* Dropdown menu for Services */}
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:text-green-400">
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
                            to="/CarpetInstallation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Carpet Installation
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/HardwoodInstallation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Hardwood Installation
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/LaminateInstallation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Laminate Installation
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink
                            to="/VinylInstallation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Vinyl Installation
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
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          "text-slate-100",
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
                        <MenuButton className="inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:text-green-400">
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

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Display Products Dropdown */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-400">
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
                  <MenuItem>
                    <NavLink
                      to="/Hardwood"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Hardwood
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/Laminate"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Laminate
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/Vinyl"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Vinyl
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/Paint"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Paint
                    </NavLink>
                  </MenuItem>
                </MenuItems>
              </Menu>

              {/* Display Services Dropdown */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-400">
                    Services
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    <NavLink
                      to="/CarpetInstallation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Carpet Installation
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/HardwoodInstallation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Hardwood Installation
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/LaminateInstallation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Laminate Installation
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/VinylInstallation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Vinyl Installation
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

              {/* Display About Us Dropdown */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-400">
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

              {/* Display Reviews and Contact Links */}
              {navigation.map((item) => (
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
      <div className="h-[0.5px] my-3"></div>
    </>
  );
};

export default Header;
