import React from 'react';
import styles from './HeaderBlock.module.css';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';


const HeaderBlock = (props) => {


    return (<div className={styles.headerPageWrapper}>
       
            <HeaderNavbar />
            <HeaderMain />
        </div>);
}

export default HeaderBlock;