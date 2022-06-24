import React from 'react';
import styles from './HeaderMain.module.css';


const HeaderMain = () => {
    return (<div className={styles.headerWrapper}>

            <div className={styles.header}>Portfolio</div>
            <div className={styles.text}>Agency provides a full service range including technical skills, design, business understanding.</div>
        </div>);
}

export default HeaderMain;