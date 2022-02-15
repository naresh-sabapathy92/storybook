import React from 'react';
import { Collapse } from 'antd';

const CollapseDisplay = ({
    panelsContent = [],
    showArrow = false
}) => {

    const { Panel } = Collapse;

    

    return (
        <Collapse
            className='collapse-display'
        >
        </Collapse>
    );
};

export default CollapseDisplay;
