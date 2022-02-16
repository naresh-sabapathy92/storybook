import React from 'react';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';

const InputRangePicker = ({ style, picker, format, onChange, disabled = false, showTime = false }) => {

    InputRangePicker.propTypes = {
        style: PropTypes.object,
        format: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        showTime: PropTypes.bool,
    };

    const { RangePicker } = DatePicker;

    const props = {
        style: style,
        picker: picker,
        showTime: showTime,
        format: format,
        disabled: disabled,
        onChange: onChange
    };

    return (
        <RangePicker {...props} />
    );
};

export default InputRangePicker;
