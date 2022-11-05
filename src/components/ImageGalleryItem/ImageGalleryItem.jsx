import React from 'react';
import { Item, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({preview, originalSize, desc, id, openModal}) => {
    return (
        <>
        <Item key={id}>
            <ItemImage src={preview} data-source={originalSize} alt={desc} onClick={openModal} loading='lazy'/>
        </Item>
        </>
        
    )
}
ImageGalleryItem.propTypes = {
    preview: PropTypes.string,
    originalSize: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.number,
    openModal: PropTypes.func
}
export default ImageGalleryItem;