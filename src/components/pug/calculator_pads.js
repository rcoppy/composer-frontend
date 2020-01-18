import React from 'react';
import NumberPad from './number_pad';
import OperatorPad from './operator_pad';
import ResultScreen from './result_screen';

const CalculatorPads = () => pug`
    .calculator-pads
      NumberPad
      OperatorPad
      ResultScreen
`;

export default CalculatorPads;