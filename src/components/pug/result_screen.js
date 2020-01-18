import React from 'react';
import { useSelector } from 'react-redux';

const ResultScreen = props => {
    
    const result = useSelector(state => state.currentResult);
    
    return (pug`
    .result-screen
      span= result
`)};

export default ResultScreen;