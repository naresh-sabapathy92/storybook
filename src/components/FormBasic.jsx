import React from 'react';
import { Form } from 'antd';
import { ButtonActionBar } from '..';
import { ButtonsObjectKeys, formItemRenderer } from '../constants/FormConstants';

const FormBasic = ({
    form,
    buttons,
    onFinish,
    formItems = [],
    preserve = true,
    labelSpan = { xl: 6, xxl: 6 },
    wrapperSpan = { xl: 12, xxl: 12 }
}) => {

    const layout = {
        labelCol: { ...labelSpan },
        wrapperCol: { ...wrapperSpan }
    };

    const props = {
        form: form,
        preserve: preserve,
        labelAlign: 'right',
        requiredMark: 'optional',
        onFinish: onFinish
    }

    const buttonProps = [{ label: buttons[ButtonsObjectKeys.PRIMARY_ACTION] }];

    const colSpans = { xl: labelSpan.xl, xxl: labelSpan.xxl };

    const renderedFormItems = formItems.map((item) => formItemRenderer(item));

    return (
        <Form
            {...layout}
            {...props}
        >
            {renderedFormItems}
            <ButtonActionBar action='one' colSpans={colSpans} buttonProps={buttonProps} />
        </Form>
    );
};

export default FormBasic;
