import React from 'react';
import { useHistory } from "react-router-dom";
import { PageHeader } from 'antd';

const CustomTitle = ({ title, hasPrevPage, link }) => {

  const history = useHistory();

  return (
    <div className="container">
      {hasPrevPage ? <PageHeader className='site-page-header' onBack={() => { history.push(link); }} title={title} /> : <PageHeader className="site-page-header" title={title} />}
    </div>
  );
};

export default CustomTitle;
