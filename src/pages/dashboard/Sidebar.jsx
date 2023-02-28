import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../Sidebar.css";
import {URL} from "../../components/constants"
import Cookies from "js-cookie";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const logoutHandler = async () =>{
    await fetch(URL+"logout").then(()=> {
          const cookie = Cookies.remove("token")
          console.log(cookie)
        }
    )
  }

  const toggleSidebar = () => {
    document.querySelector('nav.sidebar').classList.toggle('close');
  };

  const toggleDarkMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    setIsDarkMode(body.classList.contains('dark'));
  };

  return (
    <nav className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">
            {/*<img src="logo.png" alt="" />*/}
          </span>

          <div className="text logo-text">
            <span className="name">Ahom</span>
           
          </div>
        </div>

        <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box" onClick={toggleSidebar}>
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/dashboard">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-link">
              <a href="/">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Transactions</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/">
                <i className="bx bx-bell icon"></i>
                <span className="text nav-text">Notifications</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/">
                <i className="bx bx-pie-chart-alt icon"></i>
                <span className="text nav-text">Blocks</span>
              </a>
            </li>


            <li className="nav-link">
              <Link to="/wallet">
                <i className="bx bx-wallet icon"></i>
                <span className="text nav-text">Wallet</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li>
            <Link to="/">
              <i className="bx bx-log-out icon" onClick={logoutHandler}></i>
              <span className="text nav-text">Logout</span>
            </Link>
          </li>

          <li className="mode" onClick={toggleDarkMode}>
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>

  );
}

export default Sidebar;