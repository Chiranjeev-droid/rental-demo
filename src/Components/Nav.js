import React from "react";

export default function Nav() {
  return (
    <div className="nav_component w-nav">
      <div className="nav_container">
        <a href="/" className="nav_logo-link w-nav-brand">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="logo"
            className="nav_logo"
          />
        </a>
        <div className="rightlinks">
          <a href="/" className="nav_link hide w-nav-link">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
