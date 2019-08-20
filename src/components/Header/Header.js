import React from 'react';
import './Header.css';
import {Search} from '../Search/Search';
import logo from '../../img/logo.svg';


const Header = (props) => {
return (
    <header className={`header ${props.widthClass}`}>
        <div className='wrapper'>
            <img className='logo' src={logo} alt='' />
            <h3>This is page</h3>
            <Search />
        </div>
        
    </header>
)
}

export {Header};