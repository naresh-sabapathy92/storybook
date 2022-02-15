import React from 'react';
import swal from '@sweetalert/with-react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

export const successModal = (message) => {
    swal({
        title: 'Success',
        text: message,
        icon: 'success',
        className: 'modal-success'
    });
};

export const errorModal = (message) => {
    swal({
        title: "Error",
        text: message,
        icon: "error",
        className: "modal-error"
    });
};

export const confirmationModal = ({
    title,
    text,
    loading = true,
    titleLoading,
    textLoading,
    functionCalled,
    data,
    functionCancel = () => { return true }, // New to define a value to not fail
    dataCancel
}) => {
    swal({
        title: title,
        text: text,
        icon: 'warning',
        className: 'modal-confirmation',
        dangerMode: true,
        buttons: {
            cancel: {
                text: "Cancel",
                value: false,
                visible: true,
                closeModal: true,
            },
            confirm: {
                text: "Confirm",
                value: true,
                visible: true,
                closeModal: true
            },
        }
    }).then((confirm) => {
        if (confirm) {
            const icon = <LoadingOutlined style={{ fontSize: 100, margin: "30px 0px" }} spin />;
            if (loading) {
                swal({
                    title: titleLoading,
                    text: textLoading,
                    className: "modal-confirmation-loading",
                    closeOnClickOutside: false,
                    content: (
                        <Spin indicator={icon} />
                    ),
                    button: false
                });
            }
            functionCalled(data)
        } else {
            functionCancel(dataCancel)
        }
    });
};