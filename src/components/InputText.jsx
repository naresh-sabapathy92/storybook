import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const InputText = ({ style, placeholder, value, onChange, onEnter, onBlur, size = 'middle', disabled = false, }) => {

    InputText.propTypes = {
        style: PropTypes.object,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onEnter: PropTypes.func,
        onBlur: PropTypes.func,
        size: PropTypes.oneOf(['small', 'middle', 'large']),
        disabled: PropTypes.bool
    };

    return (
        <Input
            style={style}
            placeholder={placeholder}
            value={value}
            size={size}
            allowClear
            disabled={disabled}
            onChange={onChange}
            onPressEnter={onEnter}
            onBlur={onBlur}
        />
    );
};

export default InputText;
