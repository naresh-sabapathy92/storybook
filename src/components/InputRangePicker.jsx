import React from 'react';
import { DatePicker } from 'antd';

const InputRangePicker = ({ style, picker, format, onChange, disabled = false, showTime = false }) => {

    const { RangePicker } = DatePicker;

    const props = {
        style: style,
        picker: picker,
        showTime: showTime,
        format: format,
        disabled: disabled,
        onChange: onChange
    }

    return (
        <RangePicker {...props} />
    );
};

export default InputRangePicker;
