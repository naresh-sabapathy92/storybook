import { Row, Col } from 'antd';
import { InputMultipleEntries, InputReadme, InputText, InputTextArea } from "../components";

export default {
    title: 'Components/Input/Text',
    component: InputText
}

export const Text = () => {

    return (
        <Row gutter={15}>
            <Col>
                <InputText placeholder='Input Text' />
            </Col>
            <Col span={4}>
                <InputMultipleEntries style={{ width: '100%' }} placeholder='Input Multiple Entires' />
            </Col>
            <Col span={4}>
                <InputTextArea placeholder='Input Text Area' maxLength={100} />
            </Col>
            <Col>
                <InputReadme value='Read me field' />
            </Col>
        </Row>
    )
}