import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';

const TabDisplay = ({
    tabs = [],
    tabBarStyle,
    onChange,
    onTabClick,
    defaultActiveKey = '1',
    tabBarGutter = 5,
    type = 'line',
    size = 'default',
}) => {

    TabDisplay.propTypes = {
        tabs: PropTypes.array,
        tabBarStyle: PropTypes.object,
        defaultActiveKey: PropTypes.string,
        tabBarGutter: PropTypes.number,
        onChange: PropTypes.func,
        onTabClick: PropTypes.func,
        size: PropTypes.oneOf(['small', 'default', 'large']),
        type: PropTypes.oneOf(['line', 'card']),
    };

    const { TabPane } = Tabs;

    const props = {
        tabBarStyle: tabBarStyle,
        onChange: onChange,
        onTabClick: onTabClick,
        defaultActiveKey: defaultActiveKey,
        tabBarGutter: type === 'card' ? tabBarGutter : '',
        type: type,
        size: size
    }

    const tabPane = tabs.map((item, index) => <TabPane key={index + 1} tab={item.tab}>{item.content}</TabPane>)

    return (
        <Tabs
            className='tab-display'
            {...props}
        >
            {tabPane}
        </Tabs>
    );
};

export default TabDisplay;
