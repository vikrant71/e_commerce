import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer border'>
      <div className='overflow-hidden'>
        <img src={image[0]} alt="" className='hover:scale-110 transition-ease-in-out' />
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
