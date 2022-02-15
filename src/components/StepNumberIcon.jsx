import React from 'react';
import { Steps } from 'antd';

const StepNumberIcon = ({ currentStep, onChange, steps = [] }) => {

    const { Step } = Steps;

    const props = {
        current: currentStep,
        onChange: onChange
    }

    const renderedSteps = steps.map((item) => <Step key={item.title} title={item.title} status={item.status} />)

    return (
        <Steps
            className='step-number-icon'
            {...props}
        >
            {renderedSteps}
        </Steps>
    );
};

export default StepNumberIcon;
