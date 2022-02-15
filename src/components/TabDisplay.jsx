import React from 'react';
import { Tabs } from 'antd';

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
