import { Row, Col } from 'antd';
import { PlusOutlined, } from '@ant-design/icons';
import { ButtonDash } from "../components";

export default {
    title: 'Components/Button/Dash',
    component: ButtonDash
}

export const Dash = () => {
    return (
        <Row gutter={15}>
            <Col>
                <ButtonDash icon={<PlusOutlined />}>Dash</ButtonDash>
            </Col>
            <Col>
                <ButtonDash icon={<PlusOutlined />} disabled>Dash</ButtonDash>
            </Col>
        </Row>
    )
}