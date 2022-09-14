import React from 'react';
import  './MyInput.module.scss'
const MyInput = ({...props}) => {
    return (
        <input {...props} type="text"/>
    );
};

export default MyInput;