import React from 'react';
import GalleryCard from './gallery_card';

const DummyGalleryCard = () => pug`
    GalleryCard(score_title='Forest Symphony', 
                author_name='Brahms', 
                img_src='../../../assets/images/score_large.jpg', 
                score_url='dummy_score_page.pug', 
                author_url='dummy_author_page.pug', 
                avatar_src='../../../assets/images/default_avatar.jpg')
`;

export default DummyGalleryCard;