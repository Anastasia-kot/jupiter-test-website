import React from 'react';
import styles from './Header.module.css';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';


const Header = (props) => {


    return (<div className={styles.headerPageWrapper}>
       
            <HeaderNavbar />
            <HeaderMain />
        </div>);
}

export default Header;