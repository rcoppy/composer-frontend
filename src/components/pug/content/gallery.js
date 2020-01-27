import React from 'react';
import DummyGalleryCard from './dummy_gallery_card';

const Gallery = () => pug`
  h2 Gallery
  p Explore student-submitted compositions!
  
  .gallery-collection
    - var n = 0;
    while n < 20
      - n++
      DummyGalleryCard
`;

export default Gallery;