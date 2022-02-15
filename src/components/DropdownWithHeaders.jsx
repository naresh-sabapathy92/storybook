import React from 'react'
import { Row, Col, Select, Input } from 'antd';
import { tooltipEllipse } from './TooltipEllipse';

function DropdownWithHeaders ({

  // Disable Input
  disabled=false, 

  // Data of options
  data,
  
  // Array of headers
  arrayHeaders,

  //Function called on select
  onSelect

}){

  const { Option } = Select;

  return (
    <Select
      disabled={disabled}
      onSelect={(e)=>(onSelect(e))}
      showSearch
      optionFilterProp='childrens'
      filterOption={(input, option) =>{
        const filteredData = data.filter(entry => Object.keys(entry).some(k => {
        const keydata = entry[k] != null ? entry[k].toString().toLowerCase() : '';
        return keydata.includes(input.toLowerCase())}))
        const options = filteredData.map((item)=>item[1])
        return options.includes(option.value)||option.value=='special'
      }}
      style={{
        display: 'block'
      }}
    >
      <Option value='special' disabled style={{color:'black'}}>
        <Row>
          {
            arrayHeaders.map((item)=>(
              <Col span={item[1]}>{item[0]}</Col>
            ))
          }
        </Row>
      </Option>
      {data.map((item, index)=>{
        return(
          <Option value={item[1]} key={index}>
            <Row>
              {
                arrayHeaders.map((items, index)=>(
                  <Col span={arrayHeaders[index][1]}>
                    {arrayHeaders[index][2]? tooltipEllipse(item[index]): item[index]}
                  </Col>
                ))
              }
            </Row>
          </Option>
        )
      })}
    </Select>
  )
}

export default DropdownWithHeaders