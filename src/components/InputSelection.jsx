import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const InputSelection = ({ style, placeholder, options, value, onChange, showSearch = true, disabled = false, }) => {

    InputSelection.propTypes = {
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
