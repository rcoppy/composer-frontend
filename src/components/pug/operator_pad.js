import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes, faDivide, faEquals } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { queueOperation } from "../../redux/actions";
import { OPERATORS } from "../../redux/constants";

const OperatorPad = () => {
    
    const dispatch = useDispatch();

    return (pug`
    .operator-pad 
      Button(variant="secondary" onClick=() => dispatch(queueOperation(OPERATORS.ADD))).operator 
        FontAwesomeIcon(icon=faPlus)

      Button(variant="secondary" onClick=() => dispatch(queueOperation(OPERATORS.SUBTRACT))).operator 
        FontAwesomeIcon(icon=faMinus)

      Button(variant="secondary" onClick=() => dispatch(queueOperation(OPERATORS.MULTIPLY))).operator 
        FontAwesomeIcon(icon=faTimes)

      Button(variant="secondary" onClick=() => dispatch(queueOperation(OPERATORS.DIVIDE))).operator 
        FontAwesomeIcon(icon=faDivide)

      Button(variant="primary" onClick=() => dispatch(queueOperation(OPERATORS.COMPUTE))).operator.equals 
        FontAwesomeIcon(icon=faEquals)
`)};

export default OperatorPad;