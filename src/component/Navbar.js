import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart,
  faMagnifyingGlass,
  faFaceMeh,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import mainlogo from "../Assets/mainlogo.png";

const Navbar = ({ authenticate, setAuthenticate }) => {
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

  const goToHome = () => {
    navigate("/");
  };
  const goToLogIn = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="nav-section">
        <div className="nav-logo">
          <img src={mainlogo} alt="mainlogo" onClick={goToHome} />
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
              onKeyPress={(event) => search(event)}
              placeholder="Search item"
              className="search-input"
            />
          </div>
          <div className="nav-header-wishlist">
            <FontAwesomeIcon icon={faHeart} className="nav-header-icon" />
          </div>
          <div>
            {authenticate ? (
              <div
                className="nav-header-logout"
                onClick={() => setAuthenticate(false)}
              >
                <FontAwesomeIcon icon={faFaceMeh} className="nav-header-icon" />
                <div>LOG-OUT</div>
              </div>
            ) : (
              <div className="nav-header-login" onClick={goToLogIn}>
                <FontAwesomeIcon
                  icon={faFaceFrown}
                  className="nav-header-icon"
                />
                <div>LOG-IN</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
