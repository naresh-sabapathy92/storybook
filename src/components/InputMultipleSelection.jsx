import React from 'react';
import { Select } from 'antd';
import { tagRender } from '../constants/FormConstants';

const InputMultipleSelection = ({ style, placeholder, options, value, onChange, showSearch = true, disabled = false }) => {

    return (
        <Select
            showArrow
            placeholder={placeholder}
            showSearch={showSearch}
            mode='multiple'
            style={{ ...style, width: '100%' }}
            allowClear
            options={options}
            value={value}
            onChange={onChange}
            disabled={disabled}
            tagRender={tagRender}
        />

    )
}

export default InputMultipleSelection;
