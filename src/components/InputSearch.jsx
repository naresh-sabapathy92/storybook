import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const InputSearch = ({ style, placeholder, onSearch, loading = false, allowClear = true, enterButton = true }) => {

    InputSearch.propTypes = {
        style: PropTypes.object,
        placeholder: PropTypes.string,
        onSearch: PropTypes.func,
        allowClear: PropTypes.bool,
        enterButton: PropTypes.bool,
    };

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
