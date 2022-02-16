import React from 'react';
import { Select } from 'antd';
import { tagRender } from '../constants/FormConstants';
import PropTypes from 'prop-types';

const InputMultipleSelection = ({ style, placeholder, options, value, onChange, showSearch = true, disabled = false }) => {

    InputMultipleSelection.propTypes = {
        style: PropTypes.object,
        placeholder: PropTypes.string,
        options: PropTypes.array,
        value: PropTypes.string,
        onChange: PropTypes.func,
        showSearch: PropTypes.bool,
        disabled: PropTypes.bool
    };

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
