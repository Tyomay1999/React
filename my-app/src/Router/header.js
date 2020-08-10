import React from 'react';
import {Router, NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div className='header'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/car'>Car</a>
                </li>
                <li>
                    <a href='/moto'>Moto</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Header;