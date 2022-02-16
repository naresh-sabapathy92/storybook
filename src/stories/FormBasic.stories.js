import { Form } from 'antd';
import { FormBasic } from "../components";

export default {
    title: 'Components/Forms/Basic',
    component: FormBasic
};

export const Basic = () => {

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

    const formBasicItems = [
        {
            type: FormItemTypes.TEXT,
            formProps: {
                label: 'Company name', name: 'companyName',
                rules: [{ required: true, message: 'Company name is required' }]
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
        },
    ];

    const onBasicFinish = (values) => {

    };

    const buttons = { primaryAction: 'Review', secondPrimaryAction: 'Submit', secondaryAction: 'Back' };

    return (
        <FormBasic
            form={form}
            formItems={formBasicItems}
            buttons={buttons}
            onFinish={onBasicFinish}
        />
    );
};