import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using selector 
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg p-2 flex-wrap">
      <div className="flex items-center list-none">
        <img className="w-24" src={LOGO_URL}></img>
        <li className="px-2 font-mono">Welcome {loggedInUser}!</li>
      </div>
      <div className="flex items-center flex-wrap">
        <ul className="p-8 flex flex-row justify-between flex-wrap">
          <li className="px-2">
            {onlineStatus ? "Online: 🟢" : "Offline: 🔴"}
          </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="header-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          {/* <li className="px-2 font-serif font-medium cursor-pointer">Cart- ({cartItems.length} items)</li> */}
          <li className="px-2 font-serif font-medium cursor-pointer">
            <Link to="/cart">Cart- ({cartItems.length} items)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
