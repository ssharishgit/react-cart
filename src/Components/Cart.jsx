import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CurrencyRupeeIcon,PlusIcon,MinusIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid'
import { minusQuantity, plusQuantity, removeFromCart } from '../utils/cartSlice'

const Cart = () => {

  const cartItems = useSelector(store=>store.cart.items)
  const dispatch = useDispatch()

  const deleteCart = (id)=>{
    dispatch(removeFromCart(id))
  }

  const addOne = (id)=>{
    dispatch(plusQuantity(id))
  }

  const minusOne = (id)=>{
    dispatch(minusQuantity(id))
  }
  const totalQuantity = cartItems.reduce((total,item) =>total + item.quantity,0)
  const totalAmount = cartItems.reduce((total,product) =>total + (product.price * product.quantity),0)

  let discountedAmount = totalAmount * 0.9

  return (
    <>
      <div className='bg-[#EAEDED] p-[1%]'>
        <div className='bg-white p-2'>
          
          {cartItems.length>0?
          <>
            <div className='flex justify-between px-2 items-end border-b-2'>
              <h1 className='text-2xl font-medium py-4'>Shopping Cart</h1>
              <div>Price</div>
            </div>
            {cartItems.map((element)=>(
              <div key={element.id} className='py-4 sm:px-3 xss:px-1  border-b-2'>
                <div  className='flex justify-between pb-4'>
                  <h1 className='sm:text-lg xss:text-base text-black'>{element.title}</h1>
                  <h5 className='flex items-center'>    
                    <CurrencyRupeeIcon className="size-5 text-red-500 pr-[2px]" />
                    {(element.price * element.quantity).toFixed(2)}
                  </h5>
                </div>
                <div className='flex items-center gap-[4%] py-4'>
                  <div className='flex items-center gap-2'>
                    <button className='p-1 rounded-full bg-gray-200'
                    onClick={()=>{addOne(element.id)}}>
                      <PlusIcon className="sm:size-5 xss:size-4"/>
                    </button>
                    <h4 className='border-2 px-1 py-0.5 sm:text-base xs:text-xs xss:text-[10px]'>Quantity: {element.quantity}</h4>
                    {(element.quantity>1)? 
                    <button className='p-1 rounded-full bg-gray-200'
                    onClick={()=>{minusOne(element.id)}}>
                      <MinusIcon className="sm:size-5 xss:size-4"/>
                    </button>
                    : 
                    <button className='p-1 rounded-full bg-gray-100 opacity-40' disabled
                    onClick={()=>{minusOne(element.id)}}>
                      <MinusIcon className="sm:size-5 xss:size-4"/>
                    </button>
                    }
                  </div>
                  <button className='flex px-2 py-1 text-gray-600 font-semibold bg-gray-100 rounded-lg sm:text-base xs:text-sm xss:text-xs'
                  onClick={()=>{deleteCart(element.id)}}> 
                    <TrashIcon className="md:size-6 sm:size-5  xss:size-4"/>
                    <span>Remove from Cart</span>
                  </button>
                </div>
              </div>
            ))}
            <div className='flex justify-end p-3'>
              <h2 className='flex items-center gap-2'>Sub total ({totalQuantity}items): 
                <div className='flex items-center'>
                  <CurrencyRupeeIcon className="size-5 text-red-500 pr-[2px]" /> 
                  {Math.round(totalAmount)}
                </div>
              </h2>
            </div>
            <div className='flex justify-end p-3'>
              <h5 className='text-xs flex items-center px-2'> (after 10% discount)</h5>
              <h2 className='flex items-center gap-2 uppercase font-bold text-lg'>Total Amount 
                <div className='flex items-center'>
                    <CurrencyRupeeIcon className="size-6 text-red-500 pr-[2px]" /> 
                    {Math.round(discountedAmount)}
                </div>
              </h2>
            </div>
          </>
          : <h1 className='text-2xl font-medium py-4 border-b-2'>Your Cart is empty</h1>
          }
          
        </div>
      </div>
      
      
      
    </>
  )
}

export default Cart
