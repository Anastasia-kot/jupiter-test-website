import React from 'react';
import styles from './MainContent.module.css';
import ContentNavbar from './ContentNavbar/ContentNavbar';
import CardsOfGoods from './CardsOfGoods/CardsOfGoods';
import { connect } from 'react-redux';
import { setCategory, loadMoreCards, toggleSelectCard } from '../../redux/app-reducer';




const MainContent = (props) => {
    let loadMoreCardsOnClick = () => { props.loadMoreCards() }
    
    return (<div className={styles.pageMainContent}>

        <ContentNavbar 
            categories={props.categories} 
            selectedCategory={props.selectedCategoryId} 
            setCategory={props.setCategory}
            />
        <CardsOfGoods  
            cards={props.cards} 
            selectedCategoryId={props.selectedCategoryId}
            setCategory={props.setCategory}
            toggleSelectCard={props.toggleSelectCard}
            />
        <div className={styles.loadingButtonBlock}>
            <button className={styles.loadingButton} onClick={loadMoreCardsOnClick} >Load more</button>
        </div>
       

    </div>);
}
const mapStateToProps = (state) => ({
    categories: state.appPage.categories,
    cards: state.appPage.cards,
    selectedCategoryId: state.appPage.selectedCategoryId,
});



export default connect(mapStateToProps, { setCategory, loadMoreCards, toggleSelectCard })(MainContent);