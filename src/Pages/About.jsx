import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl pt-8 text-center border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[300px]' src={assets.about_us} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic labore iure nulla ipsam aperiam neque error quae unde vel cupiditate soluta, ratione, omnis nostrum!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, nesciunt earum!  temporibus optio suscipit, necessitatibus laboriosam est officia.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore in non, fque alias aca atque similique soluta iure quia doloremque modi.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, maxime!</p>
        </div>

        <div className='border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, maxime!</p>
        </div>

        <div className='border px-10 md:px-10 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, maxime!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
