import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { appendDigit, appendDecimal, deleteDigit } from "../../redux/actions";

const NumberPad = () => {
  const dispatch = useDispatch();

  return (pug`
      .number-pad
        - var n = 0
        while n < 9
          - n++
          Button(variant="secondary" size="lg" key=n onClick=() => dispatch(appendDigit(n))).numerals #{n}

        Button(variant="info" size="lg" key=++n onClick=() => dispatch(appendDecimal())) .
        Button(variant="secondary" size="lg" key=++n onClick=() => dispatch(appendDigit(0))).numerals 0
        Button(variant="info" size="lg" key=++n onClick=() => dispatch(deleteDigit()))
          FontAwesomeIcon(icon=faBackspace)
`)};

export default NumberPad;