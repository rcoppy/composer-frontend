import React from 'react';

const GalleryCard = (props) => pug`
  .gallery-card
    a.card-image.score-link(href=props.score_url)
        img(src=props.img_src)
      
    .card-label
      .label-links
        strong 
          a(href=props.score_url)= props.score_title
        p by 
          a(href=props.author_url)= props.author_name
      a.card-avatar(href=props.author_url)
        img(src=props.avatar_src)
`;

export default GalleryCard;