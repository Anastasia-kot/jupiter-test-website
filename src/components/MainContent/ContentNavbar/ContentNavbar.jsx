import React from 'react';
import styles from './ContentNavbar.module.css';


const ContentNavbar = (props) => {
    return ( 
    <div className={styles.categoriesWrapper}>
                
            {props.categories.map(c => {
                return (
                    (props.selectedCategory === c.category)
                        ? <button key={c.id} className={`${styles.categoryButton} ${styles.selected}`}>
                            {c.category}
                        </button>
                        : <button key={c.id} className={styles.categoryButton}>
                            {c.category}
                        </button>
                )}
            )}

    </div>);
}

export default ContentNavbar;