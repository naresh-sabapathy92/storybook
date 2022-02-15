import React from 'react';
import { Input } from 'antd';

const InputTextArea = ({ style, placeholder, maxLength, showCount = true, disabled = false }) => {

    const { TextArea } = Input;

    return (
        <TextArea
            style={style}
            placeholder={placeholder}
            showCount={showCount}
            maxLength={maxLength}
            disabled={disabled}
        />
    );
};

export default InputTextArea;
