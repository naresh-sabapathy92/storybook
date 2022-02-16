import { Row, Col } from 'antd';
import { InputMultipleSelection, InputSelection } from "../components";

export default {
    title: 'Components/Input/Selection',
    component: InputSelection
};

export const Selection = () => {

    const multiOptions = [{ value: 'Option 1' }, { value: 'Option 2' }, { value: 'Option 3' }, { value: 'Option 4' }, { value: 'Option 5' }];

    return (
        <Row gutter={15}>
            <Col>
                <InputSelection placeholder='Input Select' options={multiOptions} />
            </Col>
            <Col span={5}>
                <InputMultipleSelection placeholder='Mutli Input Select' options={multiOptions} />
            </Col>
        </Row>
    );
};