import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <h1>
          <span>F</span>ood <span>H</span>unger
        </h1>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
