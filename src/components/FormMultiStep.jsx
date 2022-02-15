import React, { useEffect, useState } from 'react';
import { Col, Row, Form, Space } from 'antd';
import { ButtonActionBar, StepMulti } from '..';
import { ButtonsObjectKeys, formItemRenderer } from '../constants/FormConstants';

const FormMultiStep = ({
    form,
    steps,
    stepsDirection,
    onFinish,
    formItems = [],
    buttons = { primaryAction: '', },
    labelSpan = { xl: 6, xxl: 6 },
    wrapperSpan = { xl: 12, xxl: 12 }
}) => {

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

    const renderFormItems = formItems.map((form) => {
        if (!Array.isArray(form)) return form; // If custom form 
        return (
            <Form
                {...layout}
                {...formProps}
            >
                {form.map((formItems) => formItemRenderer(formItems))}
            </Form>
        )
    });

    // Action bar
    const onNextClick = () => {
        setCurrentStep(prevState => prevState + 1);
        console.log(currentStep, stepProps.length);
    };

    const onBackClick = () => {
        setCurrentStep(prevState => prevState - 1);
        console.log(currentStep, stepProps.length);
        if (currentStep === stepProps.length) {
            const buttonsArray = [...buttonProps];
            buttonsArray[0] = { ...buttonsArray[0], label: buttons[ButtonsObjectKeys.TERTIARY_ACTION], type: 'primary', onClick: onNextClick };
            setButtonProps(buttonsArray);
        }
    };

    const onSubmit = () => {
        alert('Submitted');
    }

    useEffect(() => {
        if (stepProps) {
            const buttonsArray = [...buttonProps];
            if (currentStep !== 0 && buttonProps[2].disabled) {
                buttonsArray[2] = { ...buttonsArray[2], disabled: false };
                setButtonProps(buttonsArray);
                return;
            }
            if (currentStep === 0 && !buttonProps[2].disabled) {
                buttonsArray[2] = { ...buttonsArray[2], disabled: true };
                setButtonProps(buttonsArray);
                return;
            }
            if (currentStep === stepProps.length - 1) {
                const buttonsArray = [...buttonProps];
                buttonsArray[0] = { ...buttonsArray[0], label: buttons[ButtonsObjectKeys.CALL_TO_ACTION], type: 'success', onClick: onSubmit };
                setButtonProps(buttonsArray);
                return;
            }
        }
    }, [currentStep]);

    const [buttonProps, setButtonProps] = useState([
        { label: buttons[ButtonsObjectKeys.PRIMARY_ACTION], onClick: onNextClick },
        { label: buttons[ButtonsObjectKeys.TERTIARY_ACTION], onClick: onBackClick },
        { label: buttons[ButtonsObjectKeys.SECONDARY_ACTION], onClick: onBackClick, disabled: true }
    ]);

    const colSpans = { xl: labelSpan.xl, xxl: labelSpan.xxl };


    return (
        <>
            {stepsDirection === 'vertical' ?
                <Row>
                    <Col xl={labelSpan.xl} xxl={labelSpan.xxl}>
                        <StepMulti steps={stepProps} direction={stepsDirection} currentStep={currentStep} />
                    </Col>
                    <Col xl={24 - labelSpan.xl} xxl={24 - labelSpan.xxl}>
                        {renderFormItems[currentStep]}
                        <ButtonActionBar action='three' colSpans={colSpans} buttonProps={buttonProps} />
                    </Col>
                </Row> :
                <Space style={{ width: '100%' }} direction='vertical' size='large'>
                    <StepMulti steps={stepProps} currentStep={currentStep} />
                    {renderFormItems[currentStep]}
                    <ButtonActionBar action='three' colSpans={colSpans} buttonProps={buttonProps} />
                </Space>
            }
        </>
    );
};

export default FormMultiStep;
