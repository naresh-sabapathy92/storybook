import React, { useState } from 'react';
import { Input } from 'antd';

const InputNumber = ({ disabled }) => {

    const [value, setValue] = useState();

    let currentVal = 0;

    const formatNumber = (event) => {
        const caret = event.target.selectionStart
        const element = event.target
        window.requestAnimationFrame(() => {
            element.selectionStart = caret
            element.selectionEnd = caret
        })
        // -- Stop cursor jumping when formatting number in React

        var val = event.target.value.replace(/(\..*)\./g, '$1') //Replace Multiple Dot(.)
        var x = Number(val.replace(/,/g, ""));
        if (currentVal != x) {
            var formatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 });
            currentVal = formatter.format(x);
            setValue(currentVal);
        } else {
            setValue(val);
        }
    }

    return (
        <Input
            allowClear
            disabled={disabled}
            value={value}
            onChange={(e) => formatNumber(e)}
        />
    )
}

export default InputNumber;
