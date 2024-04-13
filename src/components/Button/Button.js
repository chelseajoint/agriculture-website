import React from 'react';

import './Button.scss';

const Button = ({ style, text, type }) => {
    const handleClick = () => {
        console.log('click');
    };
    return (
        <button className={`button ${style}`} onClick={handleClick} type={type}>
            {text}
        </button>
    );
};

export default Button;
