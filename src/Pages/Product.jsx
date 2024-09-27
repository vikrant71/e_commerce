import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {

   const { productId } = useParams();

   const { products, currency, addToCart } = useContext(ShopContext);
   const [productData, setProductData] = useState(false);
   const [image, setImage] = useState('');
   const [size, setSize] = useState('');


   const fetchProductData = async () => {

      products.map((item) => {

         if (item.id === productId) {

            setProductData(item)
            setImage(item.image[0])

            return null;
         }

      })


   }

   useEffect(() => {

      fetchProductData();

   }, [productId])


   return productData ? (
      <div className='opacity-100 border-t-2 pt-10 transition-opacity ease-in duration-500'>
         {/* Product Data */}
         <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
            {/* Product Images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
               <div className='flex sm:flex-col  justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {
                     productData.image.map((item, index) => (

                        <img onClick={() => setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />


                     ))

                  }
               </div>
               <div className='w-full sm:w-[80%]'>
                  <img src={image} alt="" className='w-full h-auto' />
               </div>
            </div>
            {/* Product Info */}
            <div className='flex-1'>
               <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
               <div className='flex items-center gap-1 mt-1'>
                  <img src={assets.star_icon} alt="" className='w-5' />
                  <img src={assets.star_icon} alt="" className='w-5' />
                  <img src={assets.star_icon} alt="" className='w-5' />
                  <img src={assets.star_icon} alt="" className='w-5' />
                  <img src={assets.star_icon} alt="" className='w-5' />
                  <p className='pl-2'>(122)</p>
               </div>
               <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
               <p className='mt-5 text-gray-500 md:w-[90%]'>{productData.description}</p>
               <div className='flex flex-col gap-4 py-8'>
                  <p>Select Size</p>
                  <div className='flex gap-2'>
                     {
                        productData.sizes.map((item, index) => (
                           <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item == size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                        ))
                     }
                  </div>
               </div>
               <button onClick={() => addToCart(productData.id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
               <hr className='mt-8 sm:w-4/5' />
               <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Original Product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return and exchange policy within 7 days.</p>
               </div>
            </div>
         </div>
         {/* Description & Review Section */}
         <div>
            <div className='flex'>
               <b className='border py-3 px-4 text-sm'>Description</b>
               <p className='border py-3 px-4 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-gray-500 text-sm'>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas non laudantium quod provident, nihil dolorum libero eos doloribus similique quos atque, modi doloremque reprehenderit earum placeat porro obcaecati exercitationem ratione!</p>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptatibus dolorem consequuntur dolor provident itaque dolore enim et tenetur. Praesentium fugiat illo .</p>
            </div>
         </div>
         {/* Related Products */}
         <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
   ) : <div className='opacity-0'></div>


}

export default Product
