import React from 'react';
import { Modal } from 'antd';

const ModalDisplay = ({
    title,
    width,
    visible,
    onCancel,
    children
}) => {
    return (
        <Modal
            className='modal-display'
            width={width}
            title={title}
            visible={visible}
            onCancel={onCancel}
            destroyOnClose={true}
            footer={null}
        >
            {children}
        </Modal>
    );
};

export default ModalDisplay;
