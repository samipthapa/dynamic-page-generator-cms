import React from "react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const componentMap = {
    IoLogoYoutube,
    RiInstagramFill,
    FaFacebook, FaXTwitter
};


const deserialize = (data) => {
    const { type, props } = data;

    let children = null;

    if (props.children) {
        if (Array.isArray(props.children)) {
            children = props.children.map((child) =>
                typeof child === 'object' ? deserialize(child) : child
            );
        } else if (typeof props.children === 'object') {
            children = deserialize(props.children);
        } else {
            children = props.children;
        }
    }

    const elementType = componentMap[type] || type;

    return React.createElement(elementType, props, children);
};

export default deserialize;

