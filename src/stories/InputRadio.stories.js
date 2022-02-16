import { useState } from "react";
import { InputRadio } from "../components";

export default {
    title: 'Components/Input/Radio',
    component: InputRadio
};

export const Radio = () => {

    const radioGroup = [
        { value: 'Radio 1', label: 'Radio 1' }, { value: 'Radio 2', label: 'Radio 2' }
    ];

    const [radioValue, setRadioValue] = useState('Radio 1');

    const onChange = (e) => {
        setRadioValue(e.target.value);
    }

    return (
        <InputRadio options={radioGroup} onChange={onChange} value={radioValue} />
    )
}