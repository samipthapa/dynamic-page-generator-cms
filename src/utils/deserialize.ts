import React from "react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { PiUsersBold } from "react-icons/pi"
import { PiStackBold } from "react-icons/pi"
import { TbMoodHappy } from "react-icons/tb"
import { IoLocation } from "react-icons/io5"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "react-slick";


const componentMap = {
    IoLogoYoutube,
    RiInstagramFill,
    FaFacebook,
    FaXTwitter,
    PiUsersBold,
    PiStackBold,
    TbMoodHappy,
    IoLocation,
    FaLocationDot,
    FaPhoneAlt,
    MdEmail,
    Slider
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

    const jsxElement = React.createElement(elementType, props, children);

    return jsxElement;
};

export default deserialize;

