import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes, faDivide, faEquals } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const OperatorPad = () => pug`
    .operator-pad 
      Button(variant="secondary").operator #[FontAwesomeIcon(icon=faPlus)]
      Button(variant="secondary").operator #[FontAwesomeIcon(icon=faMinus)]
      Button(variant="secondary").operator #[FontAwesomeIcon(icon=faTimes)]
      Button(variant="secondary").operator #[FontAwesomeIcon(icon=faDivide)]
      Button(variant="primary").operator.equals #[FontAwesomeIcon(icon=faEquals)]
`;

export default OperatorPad;