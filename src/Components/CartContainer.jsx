import React from 'react'
import { useState } from 'react'
import { CartItem } from './CartItem'
import { Total } from './Total'


let initData =[{id:1, name:'Noodle',price:30, qty:1},
               {id:2 , name:'Biryani',price:90, qty:2},
               { id:3 ,name:"Pepsi", price:10 , qty:3}]


export const CartContainer = () => {
  const [data , setData] = useState(initData)
  
  function calculateTotal(products)
  {
    //current 
    //accumalator
    return  products.reduce((acc,current)=> acc + (current.qty * current.price),0)
  }

  const handleChangeQty =(id , amount)=>
  {
   let updatedData = data.map((item)=>
   {
    if(item.id === id)
    {
      return {...item , qty
        // else
        : item.qty + amount
      }
     
    }
    else
    {
      return item
    }
   })

     setData(updatedData)
  }

  return (
    <div style={{
      padding:'1rem',
      justifyContent:'center',
      border:'1px solid tomato',
      width:'27%',
      margin:'auto',
      marginTop:'50PX',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
    }}>
            <h3> Cart Container </h3>
          {/* <CartItem />
          <CartItem />
          <CartItem /> */}

          {
            data.map((item)=>
            (
              <CartItem key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        qty={item.qty}
                        handleChangeQty={handleChangeQty}
               />
            ))
          }
          

        <Total total={calculateTotal(data)}/>

    </div>
  )
}
