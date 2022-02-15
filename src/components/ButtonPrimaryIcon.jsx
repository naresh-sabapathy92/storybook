import React from 'react';
import { Button } from 'antd';

const ButtonPrimaryIcon = ({ style, icon, buttonLabel, onClick }) => {
    return (
        <Button className='primary' style={style} shape="round" icon={icon} size='small' onClick={onClick}>
            {buttonLabel}
        </Button>
    );
};

export default ButtonPrimaryIcon;
