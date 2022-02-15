import React from 'react';
import { Radio } from 'antd';

const InputRadio = ({ onChange, value, options = [], disabled = false }) => {

    const { Group } = Radio;

    const renderedRadios = options.map((item, index) => <Radio key={index} value={item.value}>{item.label}</Radio>);

    return (
        <Group onChange={onChange} value={value} disabled={disabled}>
            {renderedRadios}
        </Group>
    );
};

export default InputRadio;
