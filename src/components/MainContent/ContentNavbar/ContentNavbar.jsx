import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from './ContentNavbar.module.css';




const ContentNavbar = (props) => {
    
    let setCategoryOnClick = (category) => { props.setCategory(category);  };



    return ( 
<Media queries={{
            small: "(max-width: 1039px)",
            large: "(min-width: 1040px)"
        }}>
{matches => (
    <Fragment>
        {matches.small && 
                    <form className={styles.formWrapper}>
                            <select className={styles.selectWrapper} 
                                name="categorySelect" onChange={(e) => setCategoryOnClick(e.target.value)} >
                            {props.categories.map(c => {
                                return ( 
                                    <option key={c.id}  className={styles.categoryButton} value={c.category}>
                                        {c.category}
                                    </option>
                                )
                            }
                            )}
                        </select>
                    </form>
        }

        
        {matches.large && <div className={styles.categoriesWrapper}>
    
            {props.categories.map(c => {
                return (
                    (props.selectedCategory === c.category)
                        ? <button key={c.id} className={`${styles.categoryButton} ${styles.selected}`}>
                            {c.category}
                        </button>
                        : <button key={c.id} className={styles.categoryButton} onClick={() => setCategoryOnClick( c.category )}>
                            {c.category}
                        </button>
                )}
            )}

        </div>}
    </Fragment>
)}
</Media>
);}

export default ContentNavbar;