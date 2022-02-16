import { Form } from 'antd';
import { FormTwoStep } from "../components";

export default {
    title: 'Components/Forms/TwoStep',
    component: FormTwoStep
}

export const TwoStep = () => {

    const FormItemTypes = Object.freeze({
        TEXT: 'text',
        MULTI_ENTRIES: 'multi-entires',
        SELECT: 'select',
        MULTI_SELECT: 'multi-select',
        TEXT_AREA: 'text-area',
        DATE_PICKER: 'date-picker',
        RADIO: 'radio',
        INPUT_GROUP: 'input-group',
        README: 'readme',
        NULL: 'null'
    });

    const [form] = Form.useForm();

    const steps = [{ title: 'Company Parameters' }, { title: 'Review' }]

    const formItems = [{
        type: FormItemTypes.TEXT,
        formProps: {
            label: 'Programme Name', name: 'programeName',
        },
    },
    {
        type: FormItemTypes.TEXT,
        formProps: {
            label: 'Company ID', name: 'companyId',
            rules: [{ required: true, message: 'Company Id is required' }]
        }
    },
    {
        type: FormItemTypes.TEXT,
        formProps: {
            label: 'Country of Incorporation', name: 'countryOfIncorporation',
            rules: [{ required: true, message: 'Country of incorporation is required' }]
        }
    },
    {
        type: FormItemTypes.SELECT,
        formProps: {
            label: 'Certification Body', name: 'certificationBody'
        }
    }];

    const onFinish = (values) => {

    };

    const buttons = { primaryAction: 'Review', callToAction: 'Submit', secondaryAction: 'Back' };

    return (
        <FormTwoStep
            form={form}
            steps={steps}
            formItems={formItems}
            buttons={buttons}
            onFinish={onFinish}
        />
    )
}