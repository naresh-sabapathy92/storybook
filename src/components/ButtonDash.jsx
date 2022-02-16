import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const ButtonDash = (({ style, size = 'middle', icon, onClick, disabled = false, children }) => {

    ButtonDash.propTypes = {
        style: PropTypes.object,
        icon: PropTypes.object,
        onClick: PropTypes.func,
        size: PropTypes.oneOf(['small', 'middle', 'large']),
        disabled: PropTypes.bool,
        children: PropTypes.any
    };

    return (
        <Button
            type='dashed'
            size={size}
            style={style}
            onClick={onClick}
            icon={icon}
            disabled={disabled}
        >
            {children}
        </Button>
    );
});

export default ButtonDash;