import { useState } from 'react';
import { CardDisplay } from "../components";

export default {
    title: 'Components/Card',
    component: CardDisplay
};

export const Card = () => {

    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 2000);

    return (
        <>
            <CardDisplay title='Display Card' loading={loading} hoverable>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </CardDisplay>
            <br />
            <CardDisplay classType='primary' style={{ width: '50%' }} hoverable >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </CardDisplay>
            <br />
            <CardDisplay title='Display Card' loading={loading} header='primary'>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </CardDisplay>
            <br />
        </>
    );
};