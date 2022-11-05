import React from "react";
import { Button } from "./Button.styled";

const BtnMore = ({text, type, onClickBtn}) => {
    return <Button type={type} onClick={onClickBtn}>{text}</Button>
}

export default BtnMore;