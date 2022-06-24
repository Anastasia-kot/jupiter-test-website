import React from 'react';
import styles from './Card.module.css';
import img0 from '../../../../Images/Bitmap-0.png';
import img1 from '../../../../Images/Bitmap-1.png';
import img2 from '../../../../Images/Bitmap-2.png';
import img3 from '../../../../Images/Bitmap-3.png';
import img4 from '../../../../Images/Bitmap-4.png';
import img5 from '../../../../Images/Bitmap-5.png';
import img6 from '../../../../Images/Bitmap-6.png';
import img7 from '../../../../Images/Bitmap-7.png';
import img8 from '../../../../Images/Bitmap-8.png';


const Card = (props) => {
        switch (props.card.imgId) {
            case 0: return (<div className={styles.card}>
                        <img src={img0} alt='item-card' className={styles.cardImg} />
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
            case 1: return (<div className={styles.card}>
                        <img src={img1} alt='item-card' className={styles.cardImg}/>
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
            case 2: return (<div className={styles.card}>
                        <img src={img2} alt='item-card' className={styles.cardImg}/>
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
            case 3: return (<div className={styles.card}>
                        <img src={img3} alt='item-card' className={styles.cardImg}/>
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
            case 4: return (<div className={styles.card}>
                        <img src={img4} alt='item-card' className={styles.cardImg}/>
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
            case 5: return (<div className={styles.card}>
                        <img src={img5} alt='item-card' className={styles.cardImg}/>
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
            case 6: return (<div className={styles.card}>
                        <img src={img6} alt='item-card' className={styles.cardImg}/>
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
            case 7: return (<div className={styles.card}>
                        <img src={img7} alt='item-card'className={styles.cardImg} />
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
            case 8: return (<div className={styles.card}>
                        <img src={img8} alt='item-card'className={styles.cardImg} />
                        <button className={styles.cardCategory}>{props.card.category}</button>
                        <div className={styles.cardName}> {props.card.cardName} </div>
                    </div>);
       
            default:
                return (<div className={styles.card}>
                    <button className={styles.cardCategory}>{props.card.category}</button>
                    <div className={styles.cardName}> {props.card.cardName} </div>
                </div>);
        }
    }


export default Card;