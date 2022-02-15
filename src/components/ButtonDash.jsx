import React from 'react';
import { Button } from 'antd';

const ButtonDash = (({ style, size = 'middle', icon, onClick, children }) => {

    return (
        <Button
            type='dashed'
            size={size}
            style={style}
            onClick={onClick}
            icon={icon}
        >
            {children}
        </Button>
    );
});

export default ButtonDash;