import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../../../assets/logo/logo2.png";
import rlogo from "../../../assets/logo/logoN.png";
import useReadingProgress from "../../../Hooks/useReadingProgress";
import './nav.css';

const Navbar = ({ setSearchQuery }) => {
  const user = null;
  const [activeNav, setActiveNav] = useState("#home");
  const completion = useReadingProgress();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [searchInput, setSearchInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  /* Control navbar background */
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.pageYOffset > 120 ? "solid" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Control dark mode and save data to local storage */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChampRegistration = () => {
    window.open("/ChampRegistration", "_blank");
    setDropdownOpen(false); // Close dropdown after clicking the link
  };

  const handleCoachRegistration = () => {
    window.open("/CoachRegistration", "_blank");
    setDropdownOpen(false); // Close dropdown after clicking the link
  };

  const handleGymRegistration = () => {
    window.open("/GymRegistration", "_blank");
    setDropdownOpen(false); // Close dropdown after clicking the link
  };

  /* Toggle dropdown */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>
          <a
            className={activeNav === "#home" ? " active_link" : ""}
            onClick={() => setActiveNav("#home")}
          >
            Home
          </a>
        </Link>
      </li>

      <li>
        <Link to={"/about"}>
          <a
            className={activeNav === "#aboutus" ? " active_link" : ""}
            onClick={() => setActiveNav("#aboutus")}
          >
            About
          </a>
        </Link>
      </li>

      <li>
        <Link to={"/programmer"}>
          <a
            className={activeNav === "#programmes" ? " active_link" : ""}
            onClick={() => setActiveNav("#programmes")}
          >
            Sports
          </a>
        </Link>
      </li>

      <li>
        <Link to={"/service"}>
          <a
            className={activeNav === "#service" ? " active_link" : ""}
            onClick={() => setActiveNav("#service")}
          >
            Service
          </a>
        </Link>
      </li>

      <li>
        <Link to={"/membership"}>
          <a
            className={activeNav === "#Membership" ? " active_link" : ""}
            onClick={() => setActiveNav("#Membership")}
          >
            Membership
          </a>
        </Link>
      </li>

      <li>
        <Link to={"/blogs"}>
          <a
            className={activeNav === "#blogs" ? " active_link" : ""}
            onClick={() => setActiveNav("#blogs")}
          >
            Blogs
          </a>
        </Link>
      </li>

      <li>
        <Link to={"/contact"}>
          <a
            className={activeNav === "#contactus" ? " active_link" : ""}
            onClick={() => setActiveNav("#contactus")}
          >
            Contact
          </a>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <a>Dashboard</a>
          </li>
          <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <img
              className="w-10 rounded-full dark:border-white border-red-600 border mx-4"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
              }
              alt=""
            />
          </div>
          <button className="btn-sm ms-3 bg-amber-500 hover:bg-amber-600 text-white rounded">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <a
              className={activeNav === "#login" ? " active_link" : ""}
              onClick={() => setActiveNav("#login")}
            >
              <Link to="/login">Login</Link>
            </a>
          </li>

          <li className="relative">
            <button
              className="flex items-center justify-between text-sm font-medium text-left text-white-700 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
              onClick={toggleDropdown}
            >
              Registration
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute left-0 w-48 py-2 mt-2 space-y-2 bg-white border rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600">
                <li>
                  <a
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    onClick={handleChampRegistration}
                  >
                    Champ Registration
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    onClick={handleCoachRegistration}
                  >
                    Coach Registration
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    onClick={handleGymRegistration}
                  >
                    Gym Registration
                  </a>
                </li>
              </ul>
            )}
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      {/* For small display */}
      <div className="lg:hidden bg-green-500 flex justify-center items-center py-2">
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <div
        className={`navbar top-0 transition-all ease-out duration-300  text-white lg:fixed z-50 py-3 md:px-8 ${
          navbarBg !== "transparent" ? "navbar_bg" : "lg:py-4 py-5"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-[#68a9d3] lg:hidden hover:bg-[#68a9d3]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#68a9d3] dark:bg-gray-700 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="cursor-pointer hidden md:block">
            {navbarBg !== "transparent" ? (
              <img className="w-28" src={rlogo} />
            ) : (
              <img className="w-28" src={logo} />
            )}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`menu menu-horizontal px-1 font-semibold ${
              navbarBg !== "transparent"
                ? "text-red-500 dark:text-white"
                : "text-white"
            } `}
          >
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Theme toggle buttons */}
          <div className="flex justify-center relative w-fit items-center rounded-full  ">
            <button
              className="toggle_class text-white dark:lg:text-white dark:text-red-500"
              onClick={() => setTheme("light")}
            >
              <FiMoon className="relative z-10 text-lg md:text-sm" />
              <span className="relative z-10 hidden md:block ">Light</span>
            </button>
            <button
              className={`toggle_class dark:text-white ${
                navbarBg !== "transparent"
                  ? "text-cyan-500"
                  : "text-cyan-500 lg:text-white"
              }`}
              onClick={() => setTheme("dark")}
            >
              <FiSun className="relative z-10 text-lg md:text-sm " />
              <span className="relative z-10 hidden md:block ">Dark</span>
            </button>
            <div className="absolute inset-0 z-0 flex dark:justify-end justify-start">
              <motion.span
                layout
                transition={{ type: "spring", damping: 15, stiffness: 250 }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"
              ></motion.span>
            </div>
          </div>
        </div>
        <span
          className="absolute bg-gradient-to-r from-red-500 via-yellow-500 to-transparent h-1 w-full bottom-0"
          style={{ transform: `translateX(${completion - 101}%)` }}
        ></span>
      </div>
    </>
  );
};

export default Navbar;
