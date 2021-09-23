import React, {useContext} from "react";
import {VisibilityContext} from "react-horizontal-scrolling-menu";
import LeftArrowImg from "../../assets/images/left-arrow.svg";
import RightArrowImg from "../../assets/images/right-arrow.svg";
import "./Arrow.css";

function Arrow({children, disabled, onClick}) {
    return (
        <div
            className="arrow"
            aria-disabled={disabled}
            onClick={onClick}>
            <img src={children} alt=""/>
        </div>
    );
}

export function LeftArrow() {
    const {scrollPrev} = useContext(VisibilityContext);

    return (
        <Arrow disabled={false} onClick={() => scrollPrev()}>
            {LeftArrowImg}
        </Arrow>
    );
}

export function RightArrow() {
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Arrow disabled={false} onClick={() => scrollNext()}>
            {RightArrowImg}
        </Arrow>
    );
}
