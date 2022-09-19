import React from 'react';


const MyInput = ({ placeholder, className, type }) => {
    return (
        <input className={`inp ${className}`} type={type} placeholder={placeholder} required />
    );
};

export default MyInput;