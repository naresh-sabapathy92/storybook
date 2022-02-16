import React, { useState } from 'react';
import { Col, Row, Form, Space } from 'antd';
import { ButtonActionBar, StepNumberIcon } from '.';
import { ButtonsObjectKeys, formItemRenderer } from '../constants/FormConstants';
import PropTypes from 'prop-types';

const FormTwoStep = ({
    form,
    steps,
    setDisabled,
    onFinish,
    formItems = [],
    buttons = { primaryAction: '', },
    labelSpan = { xl: 6, xxl: 6 },
    wrapperSpan = { xl: 12, xxl: 12 }
}) => {

    FormTwoStep.propTypes = {
        form: PropTypes.object,
        steps: PropTypes.array,
        buttons: PropTypes.object,
        onFinish: PropTypes.func,
        formItems: PropTypes.array,
        labelSpan: PropTypes.object,
        wrapperSpan: PropTypes.object,
    };

    // Steps
    const [currentStep, setCurrentStep] = useState(0);
    const [stepProps, setStepProps] = useState(steps);

    // Form
    const layout = {
        labelCol: { ...labelSpan },
        wrapperCol: { ...wrapperSpan }
    };

    const formProps = {
        form: form,
        labelAlign: 'right',
        requiredMark: 'optional',
        onFinish: onFinish,
    };

    const renderFormItems = formItems.map((item) => formItemRenderer(item));

    // Action bar
    const onReviewClick = async () => {

        let stepArray = [...stepProps];

        try {
            await form.validateFields();
            // Update step icon when fields are validated
            stepArray[currentStep] = { ...stepProps[currentStep], status: 'finish' };
            const buttonsArray = [...buttonProps];
            // Enable secondary button
            buttonsArray[currentStep + 1] = { ...buttonsArray[currentStep + 1], disabled: false }
            // Change button to primary action
            buttonsArray[currentStep] = { ...buttonsArray[currentStep], label: buttons[ButtonsObjectKeys.CALL_TO_ACTION], type: 'success', onClick: onFinish };
            setButtonProps(buttonsArray);
            setCurrentStep(currentStep + 1);
            setDisabled(true);
        } catch (error) {
            stepArray[currentStep] = { ...stepProps[currentStep], status: 'error' };
        } finally {
            setStepProps(stepArray);
        }
    };

    const onBackClick = () => {
        const stepArray = [...stepProps];
        stepArray[currentStep] = { ...stepProps[currentStep], status: 'process' };
        setStepProps(stepArray);
        const buttonsArray = [...buttonProps];
        buttonsArray[currentStep - 1] = { ...buttonsArray[currentStep - 1], disabled: true };
        setButtonProps(buttonsArray);
        setCurrentStep(currentStep - 1);
        setDisabled(false);
    }

    const [buttonProps, setButtonProps] = useState([
        { label: buttons[ButtonsObjectKeys.PRIMARY_ACTION], onClick: onReviewClick, htmlType: 'button' },
        { label: buttons[ButtonsObjectKeys.SECONDARY_ACTION], onClick: onBackClick, disabled: true }
    ]);

    const colSpans = { xl: labelSpan.xl, xxl: labelSpan.xxl };

    return (
        <>
            <Space style={{ width: '100%' }} direction='vertical' size='large'>
                <Row justify='center'>
                    <Col xl={labelSpan.xl / 2 + wrapperSpan.xl} xxl={labelSpan.xxl / 2 + wrapperSpan.xxl}>
                        <StepNumberIcon steps={stepProps} currentStep={currentStep} />
                    </Col>
                </Row>
                <Form
                    {...layout}
                    {...formProps}
                >
                    {renderFormItems}
                    <ButtonActionBar action='two' colSpans={colSpans} buttonProps={buttonProps} />
                </Form>
            </Space>
        </>
    );
};

export default FormTwoStep;
