import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem";
import {ImageGallery} from "./ImageGallery.styled";

const Gallery = ({results, onImageClick}) => {
    return (
       <ImageGallery>
        {results.map(({webformatURL, largeImageURL, tags, id})=>(
            <ImageGalleryItem preview={webformatURL} originalSize={largeImageURL} desk={tags} key={id} onClick={()=>onImageClick()}></ImageGalleryItem>
        ))}
    </ImageGallery> 
    )
}

export default Gallery;

