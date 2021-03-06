import React from 'react';
import ComposersListEntry from './composers_list_entry';
import ComposerAvatar from '../../../../assets/images/default_avatar.jpg';

const DummyComposerEntry = () => pug`
  ComposersListEntry(composer_name='John Smith', 
                     composer_bio='John was born with a viola in his mouth and a maraca between his toes. A true prodigy.', 
                     avatar_url=ComposerAvatar, 
                     composer_url='composer_page.pug')
`;

export default DummyComposerEntry;