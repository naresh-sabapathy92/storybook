import { Row, Col } from 'antd';
import { InputSearch } from "../components";


export default {
    title: 'Components/Input/Search',
    component: InputSearch
};

export const Search = () => {
    return (
        <Row gutter={15}>
            <Col>
                <InputSearch />
            </Col>
            <Col>
                <InputSearch enterButton={false} />
            </Col>
        </Row>
    )
}