import { TabDisplay } from "../components";
import { Typography } from 'antd';

export default {
    title: 'Components/Tabs',
    component: TabDisplay
};

export const Tabs = () => {

    const { Title } = Typography;

    const tabLine = [
        { tab: 'Tab 1', content: '' }, { tab: 'Tab 2', content: '' },
        { tab: 'Tab 3', content: '' }, { tab: 'Tab 4', content: '' },
    ]

    return (
        <>
            <Title level={4}>Line Tab</Title>
            <TabDisplay tabs={tabLine} />
            <br />
            <Title level={4}>Card Tab</Title>
            <TabDisplay type='card' tabs={tabLine} />
        </>
    );
}