import React from 'react';
import NumberPad from './number_pad';
import OperatorPad from './operator_pad';

const CalculatorPads = () => pug`
    .calculator-pads
      NumberPad
      OperatorPad
`;

export default CalculatorPads;