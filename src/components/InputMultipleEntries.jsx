import React from 'react';
import { Select } from 'antd';
import { tagRender } from '../constants/FormConstants';
import PropTypes from 'prop-types';

const InputMultipleEntries = ({ style, placeholder, disabled = false, }) => {

    InputMultipleEntries.propTypes = {
        style: PropTypes.object,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool
    };

    return (
        <Select
            style={style}
            mode="tags"
            open={false}
            placeholder={placeholder}
            allowClear
            disabled={disabled}
            tagRender={tagRender}
            onKeyDown={(e) => {
                if (!e.target?.value || e.target.value.length < 1) return
                // ensure max string length 64 max number of tags 10
                if (e.target.value?.length >= 64) {
                    return e.preventDefault()
                }
            }}
        />
    );
};
export default InputMultipleEntries;
