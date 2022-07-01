import React from 'react'

export const Total = (props) => {
  // console.log(total)
  return (
    <div style={{border:'1px solid tomato',
                marginTop:'20px',
                 fontSize:'20px',
                 boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
                
                }}>Total :{props.total}</div>
  )
}
