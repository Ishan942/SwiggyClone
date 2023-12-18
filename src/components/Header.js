import { flogo } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between border-b-2 border-slate-200">
      <img className="w-40 h-40" src={flogo}></img>
      <ul className="flex gap-6 m-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>Login</li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
