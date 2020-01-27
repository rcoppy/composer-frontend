import React from 'react';
import GalleryCard from './gallery_card';
import AvatarImage from '../../../../assets/images/default_avatar.jpg';
import ScoreImage from '../../../../assets/images/score_large.jpg';

const DummyGalleryCard = () => pug`
    GalleryCard(score_title='Forest Symphony', 
                author_name='Brahms', 
                img_src=ScoreImage, 
                score_url='dummy_score_page.pug', 
                author_url='dummy_author_page.pug', 
                avatar_src=AvatarImage)
`;

export default DummyGalleryCard;