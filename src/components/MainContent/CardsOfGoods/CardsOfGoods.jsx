import React from 'react';
import Card from './Card/Card';
import styles from './CardsOfGoods.module.css';


const CardsOfGoods = (props) => {
    return (<div className={styles.mainContent}>
            <div className={styles.cardsList}>
                 
            {props.cards.map(c => {
                return ( 
                    (props.selectedCategoryId === 'Show All')
                        ? <Card card={c} key={c.id} setCategory={props.setCategory} toggleSelectCard={props.toggleSelectCard}/> 
                        : ((props.selectedCategoryId === c.category) && 
                            <Card card={c} key={c.id} setCategory={props.setCategory} toggleSelectCard={props.toggleSelectCard} />)
                )
            })}
        
        
        </div>
       
       
    </div>);
}


export default CardsOfGoods;