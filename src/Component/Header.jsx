import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from 'react-router-dom';

const Cars = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const menu = [
  { name: "Car", url: "/shop/car" },
  { name: "Electric Vehicle", url: "/shop/electric-vehicle" },
  { name: "Luxury Cars", url: "/shop/luxury-cars" },
  { name: "Vintage Vehicle", url: "/shop/vintage-vehicle" },
  { name: "Bikes", url: "/shop/bikes" },
  { name: "Bus", url: "/shop/bus" },
  { name: "Bicycle", url: "/shop/bicycle" }
];
const handleLogout = () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  navigate("/login");
};
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <nav
        aria-label="Global"
        className="mx-auto flex  items-center  p-0  bg-firstbar"
      >
        <div className="flex bg-navlogo w-36 justify-center">
          <Link to="/home" className="-m-1.5 p-1.5">
            <img
              alt="Company Logo"
              src="https://i.ibb.co/Jqnhzg5/Provahan-logo-final-1-2.png"
              className="h-16 w-auto"
            />
          </Link >
        </div>
        <div className="relative px-2 my-auto max-[600px]:hidden lg:block">
          <button
            onClick={toggleDropdown}
            className="text-white font-semibold flex gap-1 bg-btn_location border-0 rounded-full px-6 py-2.5  my-auto"
          >
            <svg
            className="my-auto"
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_482_422)">
                <path
                  d="M12.5 6.15234C11.1681 6.15234 9.89073 6.68144 8.94893 7.62325C8.00713 8.56505 7.47803 9.84241 7.47803 11.1743C7.47803 13.103 9.90527 16.4478 11.3843 18.3096C11.5177 18.4774 11.6873 18.6129 11.8804 18.7061C12.0735 18.7992 12.2851 18.8476 12.4995 18.8476C12.7139 18.8476 12.9255 18.7992 13.1186 18.7061C13.3117 18.6129 13.4813 18.4774 13.6147 18.3096C15.0942 16.4487 17.521 13.103 17.521 11.1743C17.521 9.84258 16.992 8.56537 16.0504 7.62359C15.1088 6.68182 13.8317 6.1526 12.5 6.15234ZM12.5 13.1645C12.1063 13.1646 11.7215 13.048 11.3942 12.8294C11.0668 12.6107 10.8116 12.2999 10.6609 11.9363C10.5102 11.5726 10.4707 11.1724 10.5475 10.7863C10.6242 10.4002 10.8137 10.0456 11.092 9.76718C11.3704 9.48879 11.725 9.29919 12.1111 9.22236C12.4971 9.14553 12.8973 9.18491 13.261 9.33553C13.6247 9.48615 13.9356 9.74125 14.1543 10.0686C14.373 10.3959 14.4897 10.7807 14.4897 11.1743C14.4898 11.4357 14.4384 11.6944 14.3384 11.9359C14.2385 12.1774 14.0919 12.3968 13.9071 12.5816C13.7224 12.7664 13.503 12.913 13.2616 13.013C13.0201 13.1131 12.7613 13.1646 12.5 13.1645Z"
                  fill="white"
                />
                <path
                  d="M12.5 1.36719C15.0685 1.36871 17.5575 2.25806 19.5453 3.88459C21.5331 5.51112 22.8976 7.77481 23.4075 10.2922C23.9174 12.8095 23.5414 15.4257 22.3433 17.6976C21.1451 19.9695 19.1984 21.7574 16.833 22.7583C14.1123 23.9075 11.0466 23.9288 8.31019 22.8176C5.57378 21.7064 3.39088 19.5537 2.2417 16.833C1.09251 14.1123 1.07118 11.0466 2.18239 8.31019C3.29359 5.57378 5.44632 3.39088 8.16699 2.2417C9.53773 1.66147 11.0115 1.36402 12.5 1.36719ZM12.5 0C5.59668 0 0 5.59668 0 12.5C0 19.4033 5.59668 25 12.5 25C19.4033 25 25 19.4033 25 12.5C25 5.59668 19.4033 0 12.5 0Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_482_422">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
            chennai
   
          </button>
        

          {dropdownOpen && (
            <div className="absolute bg-white text-purple-800 rounded shadow mt-2 w-48 z-10">
              <Link to="/home" className="block px-4 py-2 hover:bg-purple-100">
                New York
              </Link >
              <Link to="/home" className="block px-4 py-2 hover:bg-purple-100">
                Los Angeles
              </Link >
              <Link to="/home" className="block px-4 py-2 hover:bg-purple-100">
                Chicago
              </Link >
              <Link to="/home" className="block px-4 py-2 hover:bg-purple-100">
                Houston
              </Link >
              <Link to="/home" className="block px-4 py-2 hover:bg-purple-100">
                San Francisco
              </Link >
            </div>
          )}
        </div>
        <div className="search max-[600px]:hidden  desktop:block">
          <div className="flex items-center w-search border rounded-full bg-white px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
            <input
              type="text"
              placeholder="Search"
              className="ml-3 w-full  bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7  bg-topbar text-white border rounded-full p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex  py-1.5 px-3 max-[600px]:hidden md:hidden lg:block">
          <button className="bg-yellow-400 text-purple-800 font-semibold h-fourty py-1.5 px-6  mr-1 transform -skew-x-12 shadow-md hover:bg-yellow-500 transition duration-300">
            Buy Vehicles
          </button>

          <button className="border-2 border-white text-white font-semibold py-1.5 px-6  mr-1 transform -skew-x-12 hover:bg-white hover:text-purple-800 transition duration-300">
            Sell Vehicles
          </button>
        </div>

        <div className="flex items-center justify-end space-x-6 pr-4 text-white">
          <div className="relative max-[600px]:hidden lg:block">
            <button className="flex items-center text-sm font-medium hover:text-gray-300">
              More
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="absolute left-0 hidden w-32 mt-2 bg-white text-purple-800 rounded-md shadow-lg">
              <Link to="/home" className="block px-4 py-2 text-sm hover:bg-purple-200">
                Option 1
              </Link>
              <Link to="/home" className="block px-4 py-2 text-sm hover:bg-purple-200">
                Option 2
              </Link>
            </div>
          </div>

          <button className="hover:text-gray-300">
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_482_428)">
                <path
                  d="M0.75148 8.75313L0.75148 8.75312C0.698676 5.86095 2.27872 3.83661 4.41778 3.1082C6.56359 2.37749 9.42486 2.90648 11.9655 5.48981L12.5002 6.03355L13.0349 5.48981C15.5751 2.90685 18.4362 2.37758 20.582 3.10796C22.721 3.83604 24.3012 5.85994 24.2489 8.75212C24.2016 11.3691 22.3269 14.1222 19.7673 16.6051C17.3887 18.9122 14.553 20.8571 12.5002 22.0744C10.4475 20.8572 7.61202 18.9125 5.23356 16.6055C2.674 14.1229 0.799221 11.37 0.75148 8.75313Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_482_428">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <Link to="#0"
            className="flex items-center text-sm font-medium hover:text-gray-300"
          >
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_482_430)">
                <path
                  d="M12.5 0C5.60742 0 0 5.60781 0 12.5C0 19.3922 5.60742 25 12.5 25C19.3922 25 25 19.3926 25 12.5C25 5.60742 19.3922 0 12.5 0ZM12.5 1.5625C18.5309 1.5625 23.4375 6.46875 23.4375 12.5C23.4375 14.6887 22.7891 16.727 21.6777 18.4387C21.1094 15.6754 19.3113 13.2836 16.7859 11.9805C17.5238 11.0477 17.9688 9.87266 17.9688 8.59375C17.9688 5.57812 15.5156 3.125 12.5 3.125C9.48438 3.125 7.03125 5.57812 7.03125 8.59375C7.03125 9.87266 7.47617 11.0477 8.21406 11.9805C5.68828 13.2836 3.89062 15.6754 3.32227 18.4387C2.21094 16.727 1.5625 14.6887 1.5625 12.5C1.5625 6.46875 6.46875 1.5625 12.5 1.5625ZM8.59375 8.59375C8.59375 6.43984 10.3461 4.6875 12.5 4.6875C14.6539 4.6875 16.4062 6.43984 16.4062 8.59375C16.4062 10.7477 14.6539 12.5 12.5 12.5C10.3461 12.5 8.59375 10.7477 8.59375 8.59375ZM12.5 23.4375C9.44531 23.4375 6.68047 22.177 4.69414 20.1508C4.7582 17.0824 6.63359 14.3234 9.44336 13.1266C10.3164 13.7172 11.3684 14.0625 12.5 14.0625C13.6313 14.0625 14.6836 13.7172 15.5566 13.1266C18.3664 14.3234 20.2418 17.0824 20.3059 20.1508C18.3195 22.177 15.5547 23.4375 12.5 23.4375Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_482_430">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
           <Link onClick={handleLogout}> Logout </Link>
          </Link>
        </div>
      </nav>

      {/* 2 bar */}
      <div
        aria-label="Global"
        className="flex items-center justify-end p-3 border-t border-t-firstbar bg-navlogo sm:justify-end lg:justify-center lg:px-8"
      >
        <div className="flex lg:hidden ">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center text-white justify-center   sm:items-end rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex my-auto gap-x-12 ">
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Car
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition"
            >
              <div className="p-4 ">
                {Cars.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50  group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-700"
                      >
                        {item.name}
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel> 
          </Popover> */}
          {menu.map((item, index) => (
        <Link 
          key={index} 
          to={item.url} 
          className="block  py-2  text-white  text-center"
        >
          {item.name} {/* Render only the 'name' of the item */}
        </Link>
      ))}
        </PopoverGroup>
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden "
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-firstbar px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Company Logo"
                src="https://i.ibb.co/Jqnhzg5/Provahan-logo-final-1-2.png"
                className="h-8 w-auto"
              />
            </Link >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 text-white" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <div className="search my-4">
                    <div className="flex items-center  border rounded-full bg-white px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                      <input
                        type="text"
                        placeholder="Search"
                        className="ml-3 w-full  bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7  bg-topbar text-white border rounded-full p-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7  text-white">
                    Car
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton> */}

                  {/* <DisclosurePanel className="mt-2 space-y-2">
                    {[...Cars, ...callsToAction].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=" block rounded-lg py-2 pl-3 pr-3.5 text-base/7  text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </DisclosurePanel> */}
                </Disclosure>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menu.map((item, index) => (
        <Link 
          key={index} 
          to={item.url} 
          className="block  py-2  text-white  text-center"
        >
          {item.name} 
        </Link>
      ))}
    </div>
          <div className="flex space-x-4 py-1.5 ">
            <button className="bg-yellow-400 text-purple-800 font-semibold py-1.5 px-6  transform -skew-x-12 shadow-md hover:bg-yellow-500 transition duration-300">
              Buy Vehicles
            </button>

            <button className="border-2 border-white text-white font-semibold py-1.5 px-6  transform -skew-x-12 hover:bg-white hover:text-purple-800 transition duration-300">
              Sell Vehicles
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
