import { Row, Col } from 'antd';
import { InputRangePicker } from "../components";

export default {
    title: 'Components/Input/DatePicker',
    component: InputRangePicker
};

export const RangerPicker = () => {

    return (
        <Row gutter={15}>
            <Col>
                <InputRangePicker />
            </Col>
            <Col>
                <InputRangePicker showTime={true} />
            </Col>
        </Row>
    );
};