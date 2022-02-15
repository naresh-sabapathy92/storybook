import React from 'react';
import { Button, Tooltip } from 'antd';
import { Colors } from '../constants';

const ButtonText = ({
    style,
    type,
    text,
    icon,
    prompt,
    onClick
}) => {
    const typeEnum = Object.freeze({
        default: Colors.primary3,
        success: Colors.success4,
        warning: Colors.warning3,
        error: Colors.error3
    })

    return (
        <Button
            style={{ ...style, color: typeEnum[type] }}
            className='text-button'
            size='large'
            type='text'
            onClick={onClick}
        >
            {text}
            <Tooltip title={prompt}>
                {icon}
            </Tooltip>
        </Button>
    );
};

export default ButtonText;