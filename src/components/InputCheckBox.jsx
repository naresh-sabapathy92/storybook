import React from 'react';
import { Space, Checkbox } from 'antd';

const InputCheckBox = ({ style, dataSource, onChange, disabled = false }) => {

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
