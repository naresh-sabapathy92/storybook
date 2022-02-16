import React from 'react';
import { Card, Skeleton, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Colors } from '../constants';

const CardDisplay = ({
    title,
    style,
    bodyStyle,
    loading,
    header = 'default',
    classType = 'default',
    hoverable = false,
    children,
}) => {

    CardDisplay.propTypes = {
        title: PropTypes.string,
        style: PropTypes.object,
        bodyStyle: PropTypes.object,
        header: PropTypes.oneOf(['primary', 'default']),
        classType: PropTypes.oneOf(['primary', 'default']),
        hoverable: PropTypes.bool,
        loading: PropTypes.bool,
        children: PropTypes.any
    };

    const { Title } = Typography

    const headStyle = header === 'primary' ? { background: Colors.primary2 } : '';

    const titleColor = header === 'primary' ? Colors.shadeswhite : '';

    const primaryBodyStyle = header === 'primary' ? { ...bodyStyle, boxShadow: `${Colors.neutral8} 0px 0px 2px inset` } : bodyStyle;

    const cardTitle = title ? <Title style={{ color: titleColor }} level={4}>{title}</Title> : title;

    const cardProps = {
        className: classType === 'primary' ? 'card-display-primary' : 'card-display',
        title: cardTitle,
        style: style,
        headStyle: { ...headStyle },
        bodyStyle: primaryBodyStyle,
        type: 'inner',
        hoverable: hoverable
    }

    return (
        <Card
            {...cardProps}
        >
            <Skeleton loading={loading} active>
                {children}
            </Skeleton>
        </Card>
    );
};

export default CardDisplay;
