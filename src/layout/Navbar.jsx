// import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo/risezoniclogo.png";
export default function Navbar() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <nav className="fixed w-full z-20 top-0 start-0 bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to={"/"}
            className="flex items-center space-x-3
            rtl:space-x-reverse"
          >
            <img
              width="100px"
              height="60px"
              src={Logo}
              className=""
              alt="Flowbite Logo"
            />
          </NavLink>

          <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:flex md:flex hidden"
            >
              Conatct Us
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <NavLink
                  to={"/"}
                  className="block py-2 px-3 text-white b rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/AboutUs"}
                  className="block py-2 px-3 text-white rounded
                  hover:bg-gray-800 md:hover:bg-transparent
                  md:hover:text-yellow-400 md:p-0 md:dark:hover:text-blue-500
                  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
              <div className="relative">
                <li className="group">
                  <button className="block text-white rounded focus:outline-none">
                    Services
                  </button>
                  <ul className="absolute hidden group-hover:flex  py-2  px-3 bg-white rounded shadow-lg w-48  justify-start">
                    <div>
                      <div className="relative dropdown-container">
                        <NavLink
                          to={"/CorporateTravel"}
                          htmlFor="corporateDropdown"
                          className="corporatedropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          Corporate Travel
                        </NavLink>

                        <div className="corporatedropdown-content left-[7.3rem] top-0 w-48">
                          <li>
                            <NavLink
                              to="/option1"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              Visa Assistance
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/option2"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              Car Rental
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/option2"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              Hotel Accommodation
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/option2"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              Quality Assurance
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/option2"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              Airport Transportation
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/option2"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              24/7 Travel Services
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/option2"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              Air/Bus/Rail (Ticketing)
                            </NavLink>
                          </li>
                        </div>
                      </div>

                      <div className="relative dropdown-container">
                        <NavLink
                          to={"/B2C-Travel"}
                          htmlFor="b2cDropdown"
                          className="b2cdropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          B2C
                        </NavLink>

                        <div className="b2cdropdown-content left-[7.3rem] top-0 w-48">
                          <li>
                            <NavLink
                              to="/b2c-option1"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              B2C Option 1
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/b2c-option1"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              B2C Option 2
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/b2c-option1"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              B2C Option 3
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/b2c-option1"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              B2C Option 4
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/b2c-option1"
                              className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                            >
                              B2C Option 5
                            </NavLink>
                          </li>
                        </div>
                      </div>
                    </div>
                    {/* <div className="px-4 border-l">
                      <li>
                        <NavLink
                          to="/option1"
                          className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          Visa Assistance
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/option2"
                          className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          Car Rental
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/option2"
                          className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          Hotel Accommodation
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/option2"
                          className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          Quality Assurance
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/option2"
                          className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          Airport Transportation
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/option2"
                          className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          24/7 Travel Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/option2"
                          className="block text-gray-800 hover:text-white hover:bg-gray-800 rounded py-1"
                        >
                          Air/Bus/Rail (Ticketing)
                        </NavLink>
                      </li>
                    </div> */}
                  </ul>
                </li>
              </div>

              <li>
                <NavLink
                  to={""}
                  className="block py-2 px-3 text-white rounded
                  hover:bg-gray-800 md:hover:bg-transparent
                  md:hover:text-yellow-400 md:p-0 md:dark:hover:text-blue-500
                  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {" "}
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={""}
                  className="block py-2 px-3 text-white rounded
                  hover:bg-gray-800 md:hover:bg-transparent
                  md:hover:text-yellow-400 md:p-0 md:dark:hover:text-blue-500
                  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {" "}
                  Clientele
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
