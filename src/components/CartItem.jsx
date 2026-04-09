import React from 'react'
import CartButtons from './CartButtons'

const CartItem = ({ item ,fromCart}) => {
    const { id, name, imageUrl, price , inCart } = item

    
    return (
        <div  key={id} className='group relative flex flex-col gap-y-2 border border-zinc-200 
     rounded-md bg-white p-24'>
         
       <img
  src={imageUrl}
  alt="Product Image"
  height={300}
  width={300}
  className={`${!fromCart ? 'group-hover:-translate-y-2 transition-all duration-500' : ''}`}
/>


            <div className='absolute bottom-5 left-5'>
                <h1 className={`text-zinc-700 ${fromCart && 'text-sm'}`}>{name}</h1>
                <span className={`text-pink-700 ${fromCart && 'text-sm'}`}>
                    ${price}
                </span>
            </div>
            <CartButtons item={item} fromCart={fromCart}/>

        </div>
    )
}

export default CartItem