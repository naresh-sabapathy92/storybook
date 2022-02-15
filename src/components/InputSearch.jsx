import React from 'react';
import { Input } from 'antd';

const InputSearch = ({ style, placeholder, onSearch, loading = false, allowClear = true, enterButton = true }) => {

    const { Search } = Input;

    const props = {
        style: style,
        allowClear: allowClear,
        placeholder: placeholder,
        enterButton: enterButton,
        onSearch: onSearch,
        loading: loading
    }

    return (
        <Search {...props} />
    );
};

export default InputSearch;
