import React from 'react';
import { Button, Tooltip } from 'antd';
import PropTypes from 'prop-types';

const ButtonText = ({
    style,
    type,
    text,
    icon,
    prompt,
    onClick,
    size = 'middle',
    disabled = false
}) => {

    ButtonText.propTypes = {
        style: PropTypes.object,
        icon: PropTypes.object,
        text: PropTypes.string,
        prompt: PropTypes.string,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
        size: PropTypes.oneOf(['small', 'middle', 'large']),
        disabled: PropTypes.bool
    };

    const classType = type === 'primary' ? '' :
        type === 'success' ? 'text-success' :
            type === 'warning' ? 'text-warning' :
                type === 'danger' ? 'text-danger' :
                    ''
    return (
        <Button
            style={style}
            className={`text-button ${classType}`}
            size={size}
            type='text'
            onClick={onClick}
            disabled={disabled}
        >
            {text}
            <Tooltip title={prompt}>
                {icon}
            </Tooltip>
        </Button>
    );
};

export default ButtonText;