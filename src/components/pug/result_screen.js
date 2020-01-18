import React from 'react';
import { useSelector } from 'react-redux';

const ResultScreen = props => {
    
    const currentInput = useSelector(state => state.currentInputString);
    const result = useSelector(state => state.result);

    console.log(result);

    return (
    <div className="result-screen">
        <span className="input">{currentInput}</span>
        <span className="result">{result}</span>
    </div>)
};

export default ResultScreen;