import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"

export const ProductDisplay = () => {

  const [allproducts,setAllproducts] = useState([])
  const getAllProducts = async ()=>{
    let response =  await fetch("https://fakestoreapi.com/products")
    let data =  await response.json()
    setAllproducts(data)
  }
  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div className="flex flex-wrap w-[90%] my-[2.5%] md:gap-16 xs:gap-12 xss:gap-8 mx-auto ">
      {
        allproducts.map((element,index)=>(
          <ProductCard {...element}
          key={index}
          id={element.id}
          product={element}
          />
        ))
      }
    </div>
  )
}