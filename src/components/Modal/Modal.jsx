import React, {Component} from 'react';
import { Overlay, Modal } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class ModalC extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKey);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey);
    }
    handleKey = event => {
        if(event.code === 'Escape') {
            this.props.onClick()
        }
    }
    handleBackdrop = event => {
        if(event.currentTarget === event.target) {
            this.props.onClick();
        }
    }
    render() {
        const {original, desc} = this.props;
        return createPortal(
            <Overlay onClick={this.handleBackdrop}>
        <Modal>
            <img 
            src={original} 
            alt={desc}
            width='1000'/>
        </Modal>
    </Overlay>, 
    modalRoot
        )
    }
}
ModalC.propTypes = {
    original: PropTypes.string,
    desc: PropTypes.string
}

export default ModalC;