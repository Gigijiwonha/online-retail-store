import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const menuList = [
    "WOMAN",
    "MAN",
    "NEW ARRIVALS",
    "ACCESORIES",
    "COLLECTION",
    "TRENDING NOW",
    "SALE",
  ];

  return (
    <div>
      <div>
        <div className="login-btn">
          <FontAwesomeIcon icon={faUser} />
          <div>Login</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/COS_Logo.png"
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='item-search'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder='Search item'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
