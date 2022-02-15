import React from 'react';
import { Select } from 'antd';

const InputSelection = ({ style, placeholder, options, value, onChange, showSearch = true, disabled = false, }) => {

    return (
        <Select
            style={style}
            showSearch={showSearch}
            placeholder={placeholder}
            allowClear
            value={value}
            options={options}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

export default InputSelection;
