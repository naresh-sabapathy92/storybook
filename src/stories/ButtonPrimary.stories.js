import { Row, Col } from 'antd';
import { ButtonPrimary } from "../components";

export default {
    title: 'Components/Button/Primary',
    component: ButtonPrimary,
};

export const Primary = () => {
    return (
        <Row gutter={15}>
            <Col>
                <ButtonPrimary label='Primary' />
            </Col>
            <Col>
                <ButtonPrimary label='Secondary' type="secondary" />
            </Col>
            <Col>
                <ButtonPrimary label='Success' type="success" />
            </Col>
            <Col>
                <ButtonPrimary label='Danger' type="danger" />
            </Col>
            <Col>
                <ButtonPrimary label='Disabled' disabled />
            </Col>
        </Row>
    );
};