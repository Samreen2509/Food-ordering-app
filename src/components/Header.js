import { LOGO_URL } from "../utils/contant";
const Header = () => {
    return (
     <div className="header">
      <div className="logo-container"><img className="logo" alt="logo" src={LOGO_URL} /></div>
      <div className="menu">
        <ul className="Menu-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
        </ul>
      </div>
     </div>
    )
  };

export default Header;