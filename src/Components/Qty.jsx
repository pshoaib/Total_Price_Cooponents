import React from 'react'

export const Qty = ({id ,
                     qty , 
                     ChangeCount}) => {
  return (
    <div   style={{display:'flex',
                   gap:'1rem',
               
 


}}>    
   <button  disabled={qty===0} onClick={()=> ChangeCount(id , -1)} style={{    backgroundColor:'tomato' , height:'30px', width:'50px'}}>-</button>
     <h4>{qty }</h4>
   <button onClick={()=> ChangeCount(id, +1)}  style={{    backgroundColor:'tomato' , height:'30px', width:'50px'}}>+</button>

   </div>
  )
}
