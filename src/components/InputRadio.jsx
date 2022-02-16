import React from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';

const InputRadio = ({ onChange, value, options = [], disabled = false }) => {

    InputRadio.propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func,
        options: PropTypes.array,
        disabled: PropTypes.bool,
    };

    const { Group } = Radio;

    const renderedRadios = options.map((item, index) => <Radio key={index} value={item.value}>{item.label}</Radio>);

    return (
        <Group onChange={onChange} value={value} disabled={disabled}>
            {renderedRadios}
        </Group>
    );
};

export default InputRadio;
