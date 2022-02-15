import React from 'react';
import { Form } from 'antd';
import { ButtonActionBar, StepNumberIcon } from '..';

const FormStep = ({
    form,
    ctaLabel,
    onFinish,
    labelXl = 6,
    labelXxl = 6,
    wrapperXl = 12,
    wrapperXxl = 12,
    children
}) => {

    const layout = {
        labelCol: { xl: { span: labelXl, }, xxl: { span: labelXxl, }, },
        wrapperCol: { xl: { span: wrapperXl, }, xxl: { span: wrapperXxl, }, },
    };

    const props = {
        form: form,
        labelAlign: 'right',
        requiredMark: 'optional',
        onFinish: onFinish
    }

    return (
        <>
            <StepNumberIcon>

            </StepNumberIcon>
            <Form
                {...layout}
                {...props}
            >
                {children}
                <ButtonActionBar />
            </Form>
        </>
    );
};

export default FormStep;
