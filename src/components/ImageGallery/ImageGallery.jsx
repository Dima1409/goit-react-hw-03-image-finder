import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem";
import {ImageGallery} from "./ImageGallery.styled";

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

export default Gallery;

