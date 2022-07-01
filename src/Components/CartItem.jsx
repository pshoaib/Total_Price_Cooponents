import React from 'react'
import { Lable } from './Lable'
import { Qty } from './Qty'

export const CartItem = ({id , name , price , qty, handleChangeQty}) => {
  return (
   
   <div style={{
                 display:'flex',
                 gap:'1rem',
                 padding:'1rem',
                 justifyContent:'center',
                 border:'1px solid tomato',
                 width:'60%',
                 justifyContent:'center',
                 boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                 marginBottom:'30px',
                 margin:'auto',
                 margin:'0px 0px 35px 60px'

           
                 

   }}>
         <Lable lable={name} price={price} />
        
         <Qty qty={qty} ChangeCount={handleChangeQty}  id={id}/>




    </div>
  )
}
