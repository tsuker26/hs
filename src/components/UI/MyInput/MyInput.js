import React from 'react';
import './MyInput.module.scss'

const MyInput = ({...props}) => {
    return (
        <input {...props} />
    );
};

export default MyInput;