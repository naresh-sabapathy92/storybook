import React from 'react';
import { DatePicker, TimePicker } from 'antd';;

const InputDatePicker = ({ style, picker, format, onChange, disabled = false, showTime = false }) => {

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
