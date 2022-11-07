import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem";
import {ImageGallery} from "./ImageGallery.styled";
import PropTypes from 'prop-types';

const Gallery = ({results}) => {
    return (
       <ImageGallery>
        {results.map(({webformatURL, tags, largeImageURL, id})=>(
            <ImageGalleryItem 
            src={webformatURL} 
            alt={tags} 
            largeSrc={largeImageURL} 
            key={id} />
        ))}
    </ImageGallery> 
    )
}
Gallery.propTypes = {
    results: PropTypes.array,
    webformatURL: PropTypes.string,
    tags: PropTypes.array,
    id: PropTypes.number
}
export default Gallery;

