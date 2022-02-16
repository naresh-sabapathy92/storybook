import { useState } from 'react';
import { Typography } from 'antd';
import { CardDisplay } from "../components";

export default {
    title: 'Components/Card',
    component: CardDisplay
};

export const Card = () => {

    const { Title } = Typography;

    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 2000);

    return (
        <>
            <Title level={4}>Display Card</Title>
            <CardDisplay title='Display Card' loading={loading} hoverable>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </CardDisplay>
            <br />
            <Title level={4}>Display Card Primary</Title>
            <CardDisplay classType='primary' style={{ width: '50%' }} hoverable >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </CardDisplay>
            <br />
            <Title level={4}>Display Card Header style alternative</Title>
            <CardDisplay title='Display Card' loading={loading} header='primary'>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </CardDisplay>
            <br />
        </>
    );
};