import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, useCurrentUser } from "../../redux/features/auth/authSlice";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <>
        <header className="fixed w-full z-30 backdrop-blur-sm bg-black/30">
          <nav className="navbar max-w-[1220px] px-5 md:px-10 lg:px-[20px] mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                  onClick={toggleDropdown}
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
                </div>
                <ul
                  tabIndex={0}
                  className={`menu menu-sm dropdown-content mt-3 z-[1] px-7 shadow rounded bg-primary flex justify-center w-72 h-screen absolute -left-5 transform transition-transform ${
                    dropdownOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <li className="hover:ps-3 transition-all duration-300">
                    <Link
                      to="#"
                      className="font-secondary text-2xl font-bold text-light mb-2 border-b"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="hover:ps-3 transition-all duration-300">
                    <Link
                      to="/donations"
                      className="font-secondary text-2xl font-bold text-light mb-2 border-b"
                    >
                      All Supplies
                    </Link>
                  </li>
                  <li className="hover:ps-3 transition-all duration-300">
                    <Link
                      to="/dashboard"
                      className="font-secondary text-2xl font-bold text-light mb-2 border-b"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
              <Link to="/">
                <img
                  className="w-[75px] lg:w-28 rounded-md"
                  src="/images/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="inline-flex flex-row gap-5 px-1">
                <li>
                  <Link
                    className="font-secondary text-white font-semibold text-base link-with-border"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-secondary text-white font-semibold text-base link-with-border"
                    to="/supplies"
                  >
                    All Supplies
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link
                      className="font-secondary text-white font-semibold text-base link-with-border"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="navbar-end">
              {user ? (
                <button
                  className="btn bg-primary hover:bg-secondary border-0 text-light font-secondary tracking-widest"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn bg-primary hover:bg-secondary border-0 text-light font-secondary tracking-widest"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        </header>
      </>
    </>
  );
};

export default NavBar;
