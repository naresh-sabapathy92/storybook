import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const InputTextArea = ({ style, placeholder, maxLength, showCount = true, disabled = false }) => {

    InputTextArea.propTypes = {
        style: PropTypes.object,
        placeholder: PropTypes.string,
        maxLength: PropTypes.number,
        showCount: PropTypes.bool,
        disabled: PropTypes.bool
    };

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
