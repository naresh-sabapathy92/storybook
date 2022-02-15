import React from 'react';
import { Input } from 'antd';

const InputText = ({ style, placeholder, onChange, onEnter, onBlur, disabled = false, }) => {
    return (
        <Input
            style={style}
            placeholder={placeholder}
            allowClear
            disabled={disabled}
            onChange={onChange}
            onPressEnter={onEnter}
            onBlur={onBlur}
        />
    );
};

export default InputText;
