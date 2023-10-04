import React from 'react'
import { images } from '../../../constants'
import {FcSearch} from "react-icons/fc"


const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
       <div className='mt-10 lg:w-1/2'>
            <h1 className=' font-roboto text-3xl font-bold text-dark-soft text-center md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[550px]  '>Read the most intersting articles</h1>
            <p className=' text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente doloremque consequatur sint distinctio, sunt placeat temporibus esse quam,</p>
            <div className='flex flex-col gap-y-2.5 relative mt-10 lg:mt-6 xl:mt-10'>
                <div className='relative'>
                    <FcSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6'/>
                <input className=' placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959ead] rounded-lg pl-12 pr-3 py-3 w-full  focus:outline-none shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] md:py-4 ' type="text" placeholder='Search Articles' />
                </div>
                <button className='w-full bg-primary text-white text-center md:text-xl lg:text-left md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2 font-semibold px-5 py-3 rounded-lg'>
                    Search
                </button>
            </div>
            <div className='mt-4 flex flex-col lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
                <span className='text-dark-light font-semibold italic lg:flex lg:items-start mt-2 lg:mt-4 lg:text-sm xl:text-base'>Popular text:</span>
                <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                    <li className='bg-primary bg-opacity-10 px-3 py-1.5 font-semibold rounded-lg'>Design</li>
                    <li className='bg-primary bg-opacity-10 px-3 py-1.5 font-semibold rounded-lg'>User Experienece</li>
                    <li className='bg-primary bg-opacity-10 px-3 py-1.5 font-semibold rounded-lg'>ui/ux</li>
                </ul>
            </div>
       </div>
       <div className=' hidden lg:block '>
            <img className='w-full' src={images.hero} alt="Users are reading articles" />
       </div>
    </section>
  )
}

export default Hero
