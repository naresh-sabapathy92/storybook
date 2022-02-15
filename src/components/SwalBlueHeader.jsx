import React from 'react';
import swal from '@sweetalert/with-react';
import { Typography} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const SwalHeader = ({title}) => {

  const {Title} = Typography

  return (
    <Title 
      level={3}
      align={'left'}
      style={{
        background:'#184CA7',
        fontSize: '20px',
        color: 'white',
        fontWeight: 600,
        padding:'16px 24px',
        borderRadius: '2px 0px'
      }}
    >
      {title}
      <CloseOutlined
        style={{
          position: 'relative',
          float: 'right',
          fontSize: '16px',
          paddingTop: '4px'
        }}
        onClick={()=>(swal.close())}
      />
    </Title>
  )
}

export default SwalHeader;
