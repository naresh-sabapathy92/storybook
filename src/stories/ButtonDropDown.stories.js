import { Row, Col } from 'antd';
import { ButtonDropdown } from '../components';

export default {
    title: 'Components/Button/Dropdown',
    component: ButtonDropdown,
};

export const Dropdown = () => {

    const menuItems = [
        { label: <>Button 1</> },
        { label: <>Button 2</> },
    ];

    return (
        <Row gutter={8}>
            <Col>
                <ButtonDropdown label='Click Me' buttons={menuItems} />
            </Col>
        </Row>
    );
};