import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import './Navbar.css';

export default function NavbarBootstrap() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4">
        {/* Left: Logo */}
        <a className="navbar-brand" href="/">
          <img src="images/logo.png" alt="Logo" height="40" />
        </a>

        {/* Center: Links */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">About</a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="/"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu bg-dark w-75" aria-labelledby="servicesDropdown">
                <li><a className="dropdown-item text-white" href="/">Web Development</a></li>
                <li><a className="dropdown-item text-white" href="/">App Development</a></li>
                <li><a className="dropdown-item text-white" href="/">SEO</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="/">Our Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Career</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Right: Search + Separator + Drawer Button */}
        <div className="d-flex align-items-center gap-3">
          <FaSearch className="text-white" style={{ cursor: "pointer" }} />
          <div style={{ width: "1px", height: "24px", background: "white" }}></div>
          <FaBars
            className="text-white"
            style={{ cursor: "pointer" }}
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
      </nav>

      <div>
        <hr style={{color:'lightgray'}}/>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div
          className="position-fixed top-0 end-0 bg-white text-dark p-4"
          style={{
            width: "260px",
            height: "100vh",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
            zIndex: 1050,
          }}
        >
          <button
            className="border-0 rounded-circle position-absolute"
            style={{
              backgroundColor: "grey",
              color: "white",
              width: "32px",
              height: "32px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              top:"15px",
              right:"15px"
            }}
            onClick={() => setIsDrawerOpen(false)}
          >
            ✕
          </button>

          {/* Drawer content */}
          <div className="row g-2 mt-4">
           
          </div>
        </div>
      )}
    </>
  );
}
