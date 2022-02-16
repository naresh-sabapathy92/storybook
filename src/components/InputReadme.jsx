import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const InputReadme = ({ value }) => {

    InputReadme.propTypes = {
        value: PropTypes.string,
    };

    return <Input className='input-readme' value={value} disabled />;
};

export default InputReadme;
