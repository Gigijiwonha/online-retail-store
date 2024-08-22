import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const goToLogIn = ()=> {
    navigate('/login')
  }
  return (
    <div>
      <div>
        <div className="login-btn" onClick={goToLogIn}>
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
