import './App.css';
import React, { useEffect, useRef } from "react";
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import { connect } from 'react-redux';
import { deleteCards } from './redux/app-reducer';


const DELETE_KEYS = ["46", "Delete"];


const useEventListener = (eventName, handler, element = window) => {
      const savedHandler = useRef();

      useEffect(() => {
        savedHandler.current = handler;
      }, [handler]);

      useEffect(() => {
        const eventListener = (event) => savedHandler.current(event);
        element.addEventListener(eventName, eventListener);
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      }, [eventName, element]);
};








const App = (props) =>  {
  
  const deleteCardsOnClick = () => props.deleteCards();

  const handler = ({ key }) => { if (DELETE_KEYS.includes(String(key))) { deleteCardsOnClick(); } };

  useEventListener("keydown", handler);

  return (
    <div>
      <Header />
      <MainContent />
    </div>)
  }






export default connect(null, { deleteCards })(App);


