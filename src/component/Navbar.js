import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import mainlogo from "../Assets/mainlogo.png";

const Navbar = () => {
  const menuList = [
    "OUTER",
    "T-SHIRTS",
    "PANTS",
    "ACCESORIES",
    "NEW ARRIVALS",
    "TRENDING NOW",
    "LOOK BOOK",
  ];

  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="nav-section">
        <div className="nav-logo">
          <img src={mainlogo} alt="mainlogo" />
        </div>
        <div className="nav-menu">
          <ul className="nav-menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
        <div className="nav-header">
          <div className="nav-header-search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="nav-header-icon"
            />
            <input
              type="text"
              placeholder="Search item"
              className="search-input"
            />
          </div>
          <div className="nav-header-wishlist">
            <FontAwesomeIcon icon={faHeart} className="nav-header-icon" />
          </div>
          <div className="nav-header-login" onClick={goToLogIn}>
            <FontAwesomeIcon icon={faUser} className="nav-header-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
