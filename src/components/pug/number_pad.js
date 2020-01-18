import React from 'react';
import Button from 'react-bootstrap/Button';

const NumberPad = () => pug`
    .number-pad
      - var n = 0
      while n < 9
        - n++
        Button(variant="secondary" size="lg" key=n+1).numerals #{n}
      .empty
      Button(variant="secondary" size="lg").numerals 0
`;

export default NumberPad;