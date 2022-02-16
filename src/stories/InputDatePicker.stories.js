import { Row, Col, Space } from 'antd';
import { InputDatePicker } from "../components";

export default {
    title: 'Components/Input/DatePicker',
    component: InputDatePicker
};

export const DatePicker = () => {

    return (
        <Space direction='vertical' size='large'>
            <Row gutter={10}>
                <Col>
                    <InputDatePicker picker='time' />
                </Col>
                <Col>
                    <InputDatePicker picker='date' />
                </Col>
                <Col>
                    <InputDatePicker picker='date' showTime={true} />
                </Col>
                <Col>
                    <InputDatePicker picker='week' />
                </Col>
                <Col>
                    <InputDatePicker picker='month' />
                </Col>
            </Row>
            <Row gutter={10}>
                <Col>
                    <InputDatePicker picker='quarter' />
                </Col>
                <Col>
                    <InputDatePicker picker='year' />
                </Col>
            </Row>
        </Space>
    );
};