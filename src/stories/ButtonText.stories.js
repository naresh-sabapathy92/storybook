import { Row, Col } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { ButtonText } from "../components";

export default {
    title: 'Components/Button/Text',
    component: ButtonText,
};

export const Text = () => {
    return (
        <Row gutter={8}>
            <Col>
                <ButtonText text='Text Button' />
            </Col>
            <Col>
                <ButtonText text='Success' type='success' />
            </Col>
            <Col>
                <ButtonText text='Warning' type='warning' />
            </Col>
            <Col>
                <ButtonText text='Danger' type='danger' prompt='Tooltip' icon={<InfoCircleOutlined />} />
            </Col>
            <Col>
                <ButtonText text='Disabled' disabled />
            </Col>
        </Row>
    );
};