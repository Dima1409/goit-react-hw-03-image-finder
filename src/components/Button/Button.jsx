import React from "react";
import { Button } from "./Button.styled";
import PropTypes from 'prop-types';

const BtnMore = ({text, type, onClickBtn}) => {
    return <Button type={type} onClick={onClickBtn}>{text}</Button>
}
BtnMore.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string.isRequired,
    onClickBtn: PropTypes.func

}
export default BtnMore;