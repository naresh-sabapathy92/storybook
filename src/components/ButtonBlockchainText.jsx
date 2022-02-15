import React from 'react';
import { Space } from 'antd';
import { CopyOutlined, LinkOutlined } from '@ant-design/icons';
import { ButtonText } from '..';

const ButtonBlockchainText = ({
    style,
    text,
}) => {

    const blockchainText = <Space size='small'>
        {`${text.substring(0, 10)}...${text.substring(text.length - 10)}`}
        <LinkOutlined />
        <CopyOutlined />
    </Space>;

    return (
        <ButtonText style={style} text={blockchainText} />
    );
};

export default ButtonBlockchainText;
