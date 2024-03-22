import { LOGO_URL } from "../utils/contant";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
    return (
     <div className="header">
      <div className="logo-container"><img className="logo" alt="logo" src={LOGO_URL} /></div>
      <div className="menu">
        <ul className="Menu-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="login" onClick={()=>{setloginBtn("Logout");}}>{loginBtn}</button>
        </ul>
      </div>
     </div>
    )
  };

export default Header;