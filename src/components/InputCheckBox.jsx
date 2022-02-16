import React from 'react';
import { Space, Checkbox } from 'antd';
import PropTypes from 'prop-types';

const InputCheckBox = ({ style, dataSource, onChange, disabled = false }) => {

    InputCheckBox.propTypes = {
        style: PropTypes.object,
        dataSource: PropTypes.array,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
    };

    const { Group } = Checkbox;

    const checkboxes = dataSource.map((item, index) => <Checkbox key={index} value={item.value}>{item.label}</Checkbox>)

    return (
        <Group style={style} onChange={onChange} disabled={disabled}>
            <Space>
                {checkboxes}
            </Space>
        </Group>
    );
};

export default InputCheckBox;
