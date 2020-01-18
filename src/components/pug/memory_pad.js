import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faDownload, faTrashAlt, faEraser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const MemoryPad = props => pug`
    .memory-pad 
      Button(variant="warning").operator #[FontAwesomeIcon(icon=faEraser)]
      Button(variant="secondary").operator #[FontAwesomeIcon(icon=props.existsCache ? faDownload : faSave)]
      Button(variant="secondary" disabled=!props.existsCache).operator #[FontAwesomeIcon(icon=faTrashAlt)]
`;

export default MemoryPad;