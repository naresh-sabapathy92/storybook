import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

const ModalDisplay = ({
    title,
    width,
    visible,
    onCancel,
    children
}) => {

    ModalDisplay.propTypes = {
        width: PropTypes.string,
        title: PropTypes.string,
        onCancel: PropTypes.func,
        visible: PropTypes.bool,
        children: PropTypes.any,
    };

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
