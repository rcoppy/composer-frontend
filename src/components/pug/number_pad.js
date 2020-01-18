import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faDotCircle } from '@fortawesome/free-solid-svg-icons';

const NumberPad = () => pug`
    .number-pad
      - var n = 0
      while n < 9
        - n++
        Button(variant="secondary" size="lg" key=n+1).numerals #{n}
      Button(variant="info" size="lg") .
      Button(variant="secondary" size="lg").numerals 0
      Button(variant="info" size="lg") #[FontAwesomeIcon(icon=faBackspace)]
`;

export default NumberPad;