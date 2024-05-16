import { React, useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
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
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <button
              className="login"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
