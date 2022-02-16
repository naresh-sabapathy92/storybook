import React from 'react';
import { DatePicker, TimePicker } from 'antd';
import PropTypes from 'prop-types';

const InputDatePicker = ({ style, picker, format, onChange, disabled = false, showTime = false }) => {

    InputDatePicker.propTypes = {
        style: PropTypes.object,
        picker: PropTypes.oneOf(['time', 'date', 'week', 'month', 'quarter', 'year']),
        format: PropTypes.string,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        showTime: PropTypes.bool,
    };

    const props = {
        style: style,
        picker: picker,
        showTime: showTime,
        format: format,
        disabled: disabled,
        onChange: onChange
    };

    if (picker === 'time') return <TimePicker {...props} />
    else return <DatePicker {...props} />

};

export default InputDatePicker;
