import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import PropTypes from 'prop-types';
import { ButtonPrimary } from '..';

const ButtonDropdown = ({ style, label, buttons = [], trigger = ['click'], size = 'middle' }) => {

    ButtonDropdown.propTypes = {
        style: PropTypes.object,
        label: PropTypes.string,
        buttons: PropTypes.array,
        size: PropTypes.oneOf(['small', 'middle', 'large']),
        trigger: PropTypes.oneOf(['click', 'hover'])
    };

    const { Item } = Menu;
    const menuItems = buttons.map((item, index) => <Item key={index} onClick={item.onClick}>{item.label}</Item>);
    const menu = <Menu>{menuItems}</Menu>;

    return (
        <Dropdown
            overlay={menu}
            trigger={trigger}
        >
            {/* <ButtonPrimary style={style} label={label} size={size} /> */}
            <Button>Hello</Button>
        </Dropdown>
    );
};

export default ButtonDropdown;
