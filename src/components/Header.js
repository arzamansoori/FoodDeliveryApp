import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="heading">
      <div>
        <img
          id="logo"
          src= {LOGO_URL}
        ></img>
      </div>
      <div id="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
