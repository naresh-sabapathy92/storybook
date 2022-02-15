import React from 'react';
import { Tooltip } from 'antd';

export const tooltipEllipse = (text='', width = '-webkit-fill-available', isURL = false, textLength = 20, tipText=null) => {

  if(typeof text === 'number'){
    text = text.toString()
  } else if (typeof text !== 'string'){
    text = ''
  }

  if (tipText == null){
    tipText = text
  }

  const whiteSpace = tipText==null ? 'nowrap' : 'pre-line'

  return (
    <>
    { text.length > textLength &&
      <Tooltip placement="topLeft" title={<div style={{whiteSpace:'pre-line'}}>{tipText}</div>}>
        <p 
          id = "pOverflow"
          style={{
            textOverflow: 'ellipsis',
            display: 'block',
            width: width,
            overflow: 'hidden',   
            whiteSpace:whiteSpace,
            margin: '0px'
          }}
        > { isURL ? <a target="_blank" href={process.env.REACT_APP_BLOCKCHAIN_BROWSER_URL + "wallet?walletAddress=" + text}>
            {text}
          </a> : text
        }
        </p>
      </Tooltip>
    }
    { text.length <= textLength &&
      <>{text}</>
    }
    </>
  )
}