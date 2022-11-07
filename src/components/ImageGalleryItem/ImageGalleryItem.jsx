import React, {Component} from 'react';
import { Item, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import ModalC from 'components/Modal';

class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }
    toggleModal = () => {
        this.setState(({showModal})=>({
            showModal: !showModal
        }))
    }
    render() {
        const {src, alt, largeSrc} = this.props;
        const {showModal} = this.state;
        return (
        <>
        <Item>
            <ItemImage src={src} alt={alt} onClick={this.toggleModal} loading='lazy'/>
            {showModal && (
                <ModalC onClick={this.toggleModal} original={largeSrc} desc={alt}/>
            )}
        </Item>
        </>
        
    )
    }
}
ImageGalleryItem.propTypes = {
    src: PropTypes.string,
    largeSrc: PropTypes.string,
    alt: PropTypes.string,
    toggleModal: PropTypes.func
}
export default ImageGalleryItem;