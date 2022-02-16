import { useState } from 'react';
import { Row, Col } from 'antd';
import { ButtonPrimary, ModalDisplay } from '../components';

export default {
    title: 'Components/Modal',
    components: ModalDisplay
};

export const Modal = () => {

    const [visible, setVisible] = useState(false);

    const onClickDialog = () => setVisible(true);

    const onCancel = () => setVisible(false);

    return (
        <ModalDisplay style={{ height: '50%' }} title='Modal Dialog' visible={true} onCancel={onCancel}>
        </ModalDisplay>
    );
};