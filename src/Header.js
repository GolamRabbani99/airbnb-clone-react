import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Link} from "react-router-dom"
function Header() {
  return (
    <div className='header'>
    <Link to ="/">
      <img
        src='https://www.logolynx.com/images/logolynx/42/42aa579b425819919c209641400f9487.png'
        alt=''
        className='header__icon'
      />
      </Link>
    <div className="header__center">
        <input type ="text" placeholder="start your search" />
        <SearchIcon />
    </div>

    <div className="header__right">
    <p className="header__right__para">
      Become a host
    </p>
     <LanguageIcon />
     <ExpandMoreIcon />
     <AccountBoxIcon />
    </div>
    </div>
  );
}

export default Header;
