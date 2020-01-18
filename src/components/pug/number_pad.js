import React from 'react';
import Button from 'react-bootstrap/Button';

const NumberPad = () => pug`
    .number-pad
      - var n = 0
      while n < 9
        - n++
        Button #{n}
      Button 0
`;

export default NumberPad;