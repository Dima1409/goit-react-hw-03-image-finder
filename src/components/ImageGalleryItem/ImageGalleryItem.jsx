import React, {Component} from 'react';
import { Item, ItemImage } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types';
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
// ImageGalleryItem.propTypes = {
//     preview: PropTypes.string,
//     originalSize: PropTypes.string,
//     desc: PropTypes.string,
//     id: PropTypes.number,
//     openModal: PropTypes.func
// }
export default ImageGalleryItem;