import React from 'react';
import { Menu, Dropdown } from 'antd';
import { ButtonPrimary } from '..';

const ButtonDropdown = ({ label, buttons = [], trigger = ['click'] }) => {
    const { Item } = Menu;
    const menuItems = buttons.map((item, index) => <Item key={index} onClick={item.onClick}>{item.label}</Item>);
    const menu = <Menu>{menuItems}</Menu>;

    return (
        <Dropdown overlay={menu} trigger={trigger}>
            <ButtonPrimary label={label} />
        </Dropdown>
    );
};

export default ButtonDropdown;
