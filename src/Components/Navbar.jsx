import { Link } from 'react-router-dom'
import { BoltIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector(store=>store.cart.items)
  
  return (
    <div className='flex justify-between bg-purple-950 sm:px-8 xs:px-2 xss:px-1 text-[#FFD700]'>
      <div className='md:w-1/5 flex items-start py-4'>
        <BoltIcon className="xs:size-12 xss:size-10" />
      </div>
      
      <h1 className='md:w-3/5 text-center py-6 md:text-3xl sm:text-2xl xs:text-lg font-semibold'>Z Mart</h1>
      <div className='md:w-1/5 flex items-center justify-evenly sm:text-lg xss:text-sm py-6 font-medium'>
        <Link to='/'>Products</Link>
        <Link className='flex items-center' to='/cart'>
          <h3 className='px-1'>Cart</h3>
          <button className='relative'> 
            <ShoppingCartIcon className="size-7" />
            <span className="absolute top-0 right-0 -mr-2 -mt-2 inline-flex items-center justify-center 
            w-5 h-5 bg-red-500 text-white text-xs font-medium rounded-full">
              {cartItems.length}
            </span>
          </button>
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar
