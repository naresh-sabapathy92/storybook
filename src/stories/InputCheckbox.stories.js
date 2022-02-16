import { InputCheckBox } from "../components";

export default {
    title: 'Components/Input/Checkbox',
    component: InputCheckBox
};

export const Checkbox = () => {

    const checkboxes = [
        { value: 'A', label: 'Alpha' }, { value: 'B', label: 'Bravo' }, { value: 'C', label: 'Charlie' }, { value: 'D', label: 'Delta' },
    ];

    const onCheckBoxChange = (checkedValues) => console.log(checkedValues);

    return (
        <InputCheckBox dataSource={checkboxes} onChange={onCheckBoxChange} />
    );
};