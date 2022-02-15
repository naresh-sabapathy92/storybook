import React from 'react';
import { Form, Tag, Input } from 'antd';
import { InputDatePicker, InputMultipleEntries, InputMultipleSelection, InputRadio, InputReadme, InputSelection, InputText, InputTextArea } from '../components';
import { Colors } from '.';

const { Item } = Form;
const { Group } = Input;

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

export const FormItemObjectKeys = Object.freeze({
    TYPE: 'type',
    FORM_PROPS: 'formProps',
    COMPONENT_PROPS: 'componentProps',
    INPUT_GROUP_PROPS: 'inputGroupProps'
});

export const formItemRenderer = (formItem) => {
    switch (formItem[FormItemObjectKeys.TYPE]) {
        case FormItemTypes.TEXT:
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]}><InputText {...formItem[FormItemObjectKeys.COMPONENT_PROPS]} /></Item>;
        case FormItemTypes.MULTI_ENTRIES:
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]}><InputMultipleEntries {...formItem[FormItemObjectKeys.COMPONENT_PROPS]} /></Item>;
        case FormItemTypes.SELECT:
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]}><InputSelection {...formItem[FormItemObjectKeys.COMPONENT_PROPS]} /></Item>;
        case FormItemTypes.MULTI_SELECT:
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]}><InputMultipleSelection {...formItem[FormItemObjectKeys.COMPONENT_PROPS]} /></Item>;
        case FormItemTypes.DATE_PICKER:
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]}><InputDatePicker {...formItem[FormItemObjectKeys.COMPONENT_PROPS]} /></Item>;
        case FormItemTypes.TEXT_AREA:
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]}><InputTextArea {...formItem[FormItemObjectKeys.COMPONENT_PROPS]} /></Item>;
        case FormItemTypes.RADIO:
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]}><InputRadio {...formItem[FormItemObjectKeys.COMPONENT_PROPS]} /></Item>;
        case FormItemTypes.INPUT_GROUP:
            const inputGroupItems = formItem[FormItemObjectKeys.INPUT_GROUP_PROPS].map((item) => formItemRenderer(item));
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]}><Group compact>{[...inputGroupItems]}</Group></Item>;
        case FormItemTypes.README:
            return <Item rules={[{ required: true }]} {...formItem[FormItemObjectKeys.FORM_PROPS]}><InputReadme /></Item>;
        case FormItemTypes.NULL:
            return <Item {...formItem[FormItemObjectKeys.FORM_PROPS]} />
        default:
            console.error('Could not find form item type');
            break;
    }
};

export const ButtonsObjectKeys = Object.freeze({
    PRIMARY_ACTION: 'primaryAction',
    CALL_TO_ACTION: 'callToAction',
    SECONDARY_ACTION: 'secondaryAction',
    TERTIARY_ACTION: 'tertiaryAction'
});

export const tagRender = ({ label, value, closable, onClose }) => {
    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Tag
            color={Colors.primary3}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
        >
            {label}
        </Tag>
    );
};

export default FormItemTypes;