import React from 'react'

export const Lable = ({lable , price}) => {
  
  
  return (
  
    <div style={{display:'flex',
                 gap:'1rem',
               
              
    
    }}>              
                 <div>{lable}</div>
                 <div>{price}</div>
                 
  
    </div>
  )
}
