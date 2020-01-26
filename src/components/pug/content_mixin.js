import React from 'react';

const ContentMixin = ({children}) => pug`
  .wrapper.content-outer
    .content
      .container.content
        = children
`;

export default ContentMixin;