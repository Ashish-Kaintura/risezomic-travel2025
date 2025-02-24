import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo/risezoniclogo.png";
import { useState, useEffect } from "react";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { MdNavigateNext } from "react-icons/md";
export default function HomeNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        className={`fixed w-full z-20 top-0 start-0 ${
          isScrolled
            ? "bg-[#0D0C0C] backdrop-blur-[1.4495413303375244px] bg-opacity-65"
            : "bg-transparent"
        }`}
      >
        <div className=" flex flex-wrap items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              width="100px"
              height="60px"
              src={Logo}
              className="z-99"
              alt="Flowbite Logo"
            />
          </a>
          <div className="text-white sm:flex hidden justify-center items-center">
            <ul className="flex justify-center gap-x-4">
              <li>
                <NavLink to={"/AboutUs"} className="">
                  AboutUs
                </NavLink>
              </li>
              <div className="relative">
                <li className="group">
                  <button className="block text-white rounded focus:outline-none">
                    Packages
                  </button>
                  <ul className="absolute hidden group-hover:flex  py-2  px-3 bg-white rounded shadow-lg w-64  justify-start">
                    <div>
                      <div className="relative dropdown-container">
                        <NavLink
                          to={"/Indian-Tour-Packages"}
                          className="corporatedropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                        >
                          Indian Holiday
                        </NavLink>
                      </div>

                      <div className="relative dropdown-container">
                        <NavLink
                          to={"/International-Tour-Packages"}
                          className="b2cdropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                        >
                          International Holiday
                        </NavLink>
                      </div>
                      <div className="relative dropdown-container">
                        <NavLink
                          to={"/International-Honeymoon-packages"}
                          className="b2cdropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                        >
                          International Honeymoon Packages
                        </NavLink>
                      </div>
                      <div className="relative dropdown-container">
                        <NavLink
                          to={"/Indian-honeymoon-packages"}
                          className="corporatedropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                        >
                          Indian Honeymoon packages
                        </NavLink>
                      </div>
                    </div>
                  </ul>
                </li>
              </div>
              <li>
                <NavLink to={"/mice"} className="">
                  Mice
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services/Hotel"} className="">
                  Hotel
                </NavLink>
              </li>
              <li>
                <NavLink to={"/News-And-Media"} className="">
                  News
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Sustainability"} className="">
                  Sustainability
                </NavLink>
              </li>
              <div className="relative">
                <li className="group">
                  <button className="block text-white rounded focus:outline-none">
                    More
                  </button>
                  <ul className="absolute hidden group-hover:flex  py-2  px-3 bg-white rounded shadow-lg w-48  justify-start">
                    <div>
                      <NavLink
                        to={"/flights"}
                        className="corporatedropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                      >
                        Flight
                      </NavLink>

                      <NavLink
                        to={"/Cruise"}
                        className="b2cdropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                      >
                        Cruise
                      </NavLink>
                      <NavLink
                        to={"/Visa"}
                        className="b2cdropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                      >
                        Visa
                      </NavLink>
                      <NavLink
                        to={"/Meeting-And-Event"}
                        className="b2cdropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                      >
                        Meeting And Events
                      </NavLink>
                      <NavLink
                        to={"/Insurance"}
                        className="b2cdropbtn block text-gray-800 dropdown hover:text-white hover:bg-gray-800 rounded py-1 px-2"
                      >
                        Insurance
                      </NavLink>
                    </div>
                  </ul>
                </li>
              </div>
            </ul>
          </div>

          <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
            <Link to={"/Contact-us"}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:flex md:flex hidden"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div className="sm:hidden flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isMenuOpen ? (
                <TiTimes className="text-3xl text-gray-400" />
              ) : (
                <TiThMenu className="text-3xl text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <nav
        className={`phonenav ${
          isMenuOpen ? "open" : ""
        } block justify-center p-4 px-8 
        `}
      >
        <div className="">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              width="100px"
              height="60px"
              src={Logo}
              className="z-99"
              alt="Flowbite Logo"
            />
          </a>
        </div>
        <ul className="text-gray-200 mt-4 text-lg font-thin gap-y-4">
          <li className="flex gap-x-1 items-center ">
            <MdNavigateNext />{" "}
            <NavLink to={"/"} className="">
              Home
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/AboutUs"} className="">
              AboutUs
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/Indian-Tour-Packages"} className="">
              Indian Holiday
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/International-Tour-Packages"} className="">
              International Holiday
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/mice"} className="">
              Mice
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/News-And-Media"} className="">
              News
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />

            <NavLink to={"/services/Hotel"} className="">
              Hotel
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/Sustainability"} className="">
              Sustainability
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/flights"} className="">
              Flight
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/Cruise"} className="">
              Cruise
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/Visa"} className="">
              Visa
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/Meeting-And-Even"} className="">
              Meeting And Events
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/Insurance"} className="">
              Insurance
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/Privacy-Policy"} className="">
              Privacy Policy
            </NavLink>
          </li>
          <li className="flex gap-x-1 items-center">
            <MdNavigateNext />
            <NavLink to={"/ContactUs"} className="">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
