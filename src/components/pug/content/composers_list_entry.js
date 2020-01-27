import React from 'react';

const ComposersListEntry = (props) => pug` 
    a.composers-list-entry(href=props.composer_url)
      .img-container
        img(src=props.avatar_url)
      .text-copy
        h3= props.composer_name
        p= props.composer_bio
`;

export default ComposersListEntry;
    
    