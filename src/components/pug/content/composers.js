import React from 'react';
import DummyComposerEntry from './dummy_composer_entry.js';

const Composers = () => pug`
  h2 Composers
  p Here are the students who have submitted scores so far.
  
  .composers-list
    - var n = 0;
    while n < 20
      - n++
      DummyComposerEntry
`;

export default Composers