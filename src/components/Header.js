import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="heading">
      <div>
        <img id="logo" src={LOGO_URL}></img>
      </div>
      <div id="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            className="header-btn"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
