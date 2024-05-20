import { React, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  return (
    <header>
      <div className="logo-container">
        <h1>
          <span>F</span>ood <span>H</span>unger
        </h1>
      </div>

      <nav>
        <ul>
          <li>
            Status: {onlineStatus ? "you're Online✅" : "you're Offline🔴"}
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            Cart
            {/* <i className="fa-solid fa-cart-shopping"></i> */}
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
