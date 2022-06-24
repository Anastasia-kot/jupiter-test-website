import React from 'react';
import styles from './MainContent.module.css';
import ContentNavbar from './ContentNavbar/ContentNavbar';
import CardsOfGoods from './CardsOfGoods/CardsOfGoods';
import { connect } from 'react-redux';



const MainContent = (props) => {


    return (<div className={styles.main}>

        <ContentNavbar categories={props.categories} selectedCategory={props.selectedCategoryId} />
        <CardsOfGoods  cards={props.cards} selectedCategoryId={props.selectedCategoryId} />

        </div>);
}
const mapStateToProps = (state) => ({
    categories: state.appPage.categories,
    cards: state.appPage.cards,
    selectedCategoryId: state.appPage.selectedCategoryId,
});



export default connect(mapStateToProps, {})(MainContent);