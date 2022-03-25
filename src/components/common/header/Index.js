import React from 'react';
import { FiSearch } from "react-icons/fi";

import './header.css';


const Header = () => {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' 
      alt='Zomato clone'
      className='header-logo' 
      />
      <div className='header-right'>
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className='fi fi-rr-marker absolute-center location-icon'></i>
              <div>Lagos</div>
            </div>
            <i className='fi fi-rr-caret-down absolute-center'></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className='absolute-center search-icon'>
              <FiSearch />
            </i>
            <input 
            placeholder='Search for restaurant, cuisine or a dish' 
            className='search-input' />
          </div>
        </div>
        <div className='profile-wrapper'>
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className='header-username'>Eyitope</span>
          <i className='fi fi-rr-angle-small-down absolute-center profile-options-icon'></i>
        </div>
      </div>
    </div>
  )
}

export default Header