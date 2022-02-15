import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb } from 'antd';

const BreadcrumbComponent = ({ breadcrumbList }) => {
    return (
        <div>
            <Breadcrumb separator=">" style={{ fontWeight: 'bold', fontSize: '18px', marginTop:'12px' }}>
                {breadcrumbList.map((item, index) => (
                    <React.Fragment key={item.link}>
                        <Breadcrumb.Item>
                            {index !== breadcrumbList.length - 1?
                              <Link style={{ color: '#184ca7 ' }} to={item.link}>
                                {item.pagename}
                              </Link>:
                                item.pagename
                            }
                        </Breadcrumb.Item>
                    </React.Fragment>
                ))}
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbComponent;