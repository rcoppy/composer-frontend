import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faDownload, faTrashAlt, faEraser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { eraseScreen, deleteCache, cacheResult, loadCache } from "../../redux/actions";

// buttons for handling the result, stored result
const MemoryPad = props => {
    
    const existsCache = useSelector(state => state.existsCache);
    const dispatch = useDispatch();

    // onClick helper functions
    const manageCache = existsCache ? () => dispatch(loadCache()) : () => dispatch(cacheResult());
    const handleDelete = () => {
        if (existsCache) {
            dispatch(deleteCache());
        }
    }

    return (pug`
    .memory-pad 
      // clear the displayed result
      Button(variant="warning" onClick=() => dispatch(eraseScreen())).operator 
        FontAwesomeIcon(icon=faEraser)

      // either load in or save out cache/result
      Button(variant="secondary" onClick=manageCache).operator
        FontAwesomeIcon(icon=existsCache ? faDownload : faSave)

      // trash the cache if it exists
      Button(variant="secondary" onClick=handleDelete disabled=!existsCache).operator
        FontAwesomeIcon(icon=faTrashAlt)
`)};

export default MemoryPad;