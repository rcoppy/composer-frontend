import React from 'react';

const ContentMixin = ({children}) => pug`
  .wrapper
      .container.content
        = children
`;

export default ContentMixin;