import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ style, icon, label, onClick, type = 'primary', size = 'middle', htmlType = '', disabled = false }) => {

    ButtonPrimary.propTypes = {
        style: PropTypes.object,
        icon: PropTypes.object,
        label: PropTypes.string,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
        size: PropTypes.oneOf(['small', 'middle', 'large']),
        htmlType: PropTypes.oneOf(['submit', 'reset']),
        disabled: PropTypes.bool
    };
    
    const classType = type === 'primary' ? 'primary' :
        type === 'secondary' ? 'secondary' :
            type === 'success' ? 'success' :
                type === 'danger' ? 'danger' :
                    'primary'

    return (
        <Button
            className={`button ${classType}`}
            style={style}
            size={size}
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