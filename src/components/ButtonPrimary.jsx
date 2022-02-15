import React from 'react';
import { Button } from 'antd';

const ButtonPrimary = ({ style, icon, label, onClick, type = 'primary', htmlType = '', disabled = false }) => {

    const classType = type === 'primary' ? 'primary' :
        type === 'secondary' ? 'secondary' :
            type === 'success' ? 'success' :
                type === 'danger' ? 'danger' :
                    'primary'

    return (
        <Button
            className={`button ${classType}`}
            style={style}
            onClick={onClick}
            icon={icon}
            htmlType={htmlType}
            disabled={disabled}
        >
            {label}
        </Button>
    )
};


export default ButtonPrimary;