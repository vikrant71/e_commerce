import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl pt-10 text-center border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_us} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-gray-600 font-semibold text-xl'>Our Store</p>
          <p className='text-gray-500'>124 Civil Lines,Prayagraj</p>
          <p className='text-gray-500'>Tel: (145) 554-122 <br /> Email: abc@123.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Careers at forever </p>
          <p className='text-gray-500'>Learn more about our teams and job openings </p>
          <button className='border border-black text-sm my-8 px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
