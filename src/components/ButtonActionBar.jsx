import React from 'react';
import { Col, Row, Space } from 'antd';
import { ButtonPrimary } from '.';

const ButtonActionBar = ({ action, buttonProps, colSpans }) => {

    if (action === 'one')
        return (
            <Row>
                <Col {...colSpans} />
                <ButtonPrimary {...buttonProps[0]} />
            </Row>
        );
    if (action === 'two')
        return (
            <Row>
                <Col {...colSpans} />
                <Space size='middle'>
                    <ButtonPrimary {...buttonProps[0]} />
                    <ButtonPrimary type='secondary' {...buttonProps[1]} />
                </Space>
            </Row>
        )
    if (action === 'three')
        return (
            <Row>
                <Col {...colSpans}>
                    <Row justify='end'>
                        <ButtonPrimary type='secondary' style={{ marginRight: '1.1rem' }} {...buttonProps[2]} />
                    </Row>
                </Col>
                <Space size='middle'>
                    <Col>
                        <ButtonPrimary {...buttonProps[1]} />
                    </Col>
                    <Col>
                        <ButtonPrimary {...buttonProps[0]} />
                    </Col>
                </Space>
            </Row>
        )
    else
        return (
            <></>
        );
};

export default ButtonActionBar;
