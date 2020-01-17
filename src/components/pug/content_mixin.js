const ContentMixin = ({children}) => pug
  .wrapper.content
    .container.content
      = children
;

export default ContentMixin;