import { CurrencyRupeeIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../utils/cartSlice'
import { TrashIcon } from '@heroicons/react/24/solid'

export function ProductCard({id,category,description,image,price,title,rating,product}){

  const cartItems = useSelector(store=>store.cart.items)
  const dispatch = useDispatch()
  const existingInCart = (cartItems.length > 0) && (cartItems.find(i => i.id === id))
  
  const handleCart = ()=>{ 
    dispatch(addToCart(product))
  }
  const deleteCart = (id)=>{
    dispatch(removeFromCart(id))
  }

  return (
    <div className="w-72 border border-purple-400 rounded-md px-1 py-2 shadow-md">
      <img src={image} alt="" className="h-60 w-72 p-6" />
      <h3 className='flex items-center my-2 xs:text-base xss:text-sm font-medium h-24'>
        {title}
      </h3>
      <p className='xs:text-sm xss:text-xs'>{(description.length<100)?description:(description.substring(0,100)+"...")}</p>
      <div className="flex justify-between p-1">

        <h5 className='flex items-center xs:text-sm xss:text-xs'>    
          <CurrencyRupeeIcon className="size-6 text-red-500 pr-[2px]" />
          {price}
        </h5>
        {(!existingInCart)?
        <button className='xs:px-3 xs:py-2 xss:p-1 border-2 border-yellow-400 rounded-lg text-purple-800 xs:text-sm xss:text-xs font-medium'
        onClick={handleCart}
        >Add to Cart</button>
        :<button className='flex xs:px-3 xs:py-2 xss:p-1 border-2 border-yellow-400 rounded-lg text-red-600 xs:text-sm xss:text-xs font-medium'
        onClick={()=>{deleteCart(id)}}> 
          <TrashIcon className="md:size-5 sm:size-4  xss:size-4"/>
          <span>Remove from Cart</span>
        </button>
        }
      </div>
      
    </div>
  )
}
