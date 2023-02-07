import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header>
            <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/C.P._Company_logo.svg/1280px-C.P._Company_logo.svg.png'></img>
        </header>
    );
}

export default Header;