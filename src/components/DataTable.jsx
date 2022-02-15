import React from 'react'

import { Row, Col, Input, Table, Select } from 'antd'

function DataTable({ 
  
  // Data for the table
  columns,
  dataSource,

  searchFn,
  filterFn,
  
  value,
  components,
  rowClassName,
  pagination,
  onTableChange,
  searchBarText,
  filterbar,
  filterBarOptions,
  searchBarSpan=10,
  filterBarSpan=8

  }) {
  const {Option} = Select;


  return (
    <div className='data-table'>
      <Row gutter={10}>
        <Col className='search-bar' span={searchBarSpan}>
          <Input
            placeholder={searchBarText}
            value={value}
            onChange={(e) => searchFn(e.target.value)}
            style={{borderRadius:'5px'}}
          />
        </Col>
          { filterbar &&
        <Col className='search-bar' span={filterBarSpan}>
          <Select className="select--no-inline" value={value} onChange={filterFn} defaultValue={"All"} width={100}>
            {filterBarOptions.map((item, index) =><Option key={index} value={item.value}>{item.label}</Option>)}
          </Select>
        </Col>
          }
      </Row>
      <Table
        rowClassName={rowClassName}
        components={components}
        dataSource={dataSource}
        columns={columns}
        pagination={pagination}
        onChange={onTableChange}
        scroll={{ x: 700 }}
      />
    </div>
  )
}

export default DataTable