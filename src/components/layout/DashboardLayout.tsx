import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavContent = (
  <>
    <Link to="/dashboard">
      <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Dashboard</li>
    </Link>
    <Link to="/dashboard/create-supplies">
      <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
        Create Supplies
      </li>
    </Link>
    <Link to="/dashboard/all-supplies">
      <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
        All Supplies
      </li>
    </Link>
    <Link to="/">
      <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Back to Home</li>
    </Link>
  </>
);

const DashboardLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sider */}
        <aside className="hidden lg:block w-64 bg-gray-900 text-light">
          <div className="p-4">
            <Link to="/">
              <img className="w-24 rounded-md" src="/images/logo.png" alt="" />
            </Link>
          </div>
          <nav className="mt-4">
            <ul>{NavContent}</ul>
          </nav>
        </aside>

        {/* Navbar for Mobile and Tablet */}
        <nav className="lg:hidden fixed w-full bg-gray-200 flex justify-between items-center p-4">
          <div className=" w-full flex items-center justify-between px-2">
            {/* Logo */}
            <div className="mr-4">
              <Link to="/">
                <img
                  className="w-24 rounded-md"
                  src="/images/logo.png"
                  alt=""
                />
              </Link>
            </div>

            <button onClick={toggleDrawer}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <div className="bg-white text-dark rounded-lg shadow-lg p-0 lg:p-6 mt-24 lg:mt-0">
            <Outlet />
          </div>
        </main>

        {/* Drawer */}
        <div className="drawer lg:hidden">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isOpen}
            onChange={toggleDrawer}
          />
          <div className={`drawer-side ${isOpen ? "active" : ""}`}>
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul
              className="flex flex-col justify-center menu p-4 w-52 min-h-full bg-base-300 text-base-content"
              onClick={() => setIsOpen(false)}
            >
              {NavContent}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
