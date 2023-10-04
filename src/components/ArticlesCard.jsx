import React from 'react'
import { images } from '../constants'
import {PiSealCheckFill} from 'react-icons/pi'

const ArticlesCard = () => {
  return (
    <div className='rounded-xl border border-t-2  border-l-2 border-slate-800 overflow-hidden shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'>
        <img src={images.logo} alt={images.logo}className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60'/>
        <div className='p-5'>
            <h2 className='font-roboto font-bold text-xl text-dark-soft'>Future of Work</h2>
            <p className='text-dark-light text-sm mt-3 '> Majority of people will work in jobs that don't exist today.</p>
            <div className='flex justify-between flex-nowrap mt-6 items-center'>
              <div className='flex items-center gap-x-2'>
               <img src={images.postprofileImage} alt="profile" className='w-9 h-9 ' />
               <div className='flex flex-col'>
                  <h4 className='font-bold italic text-dark-soft text-sm '> Nitin Yadav </h4>
                  <div className='flex items-center gap-x-2'>
                    <span className=' bg-[#36b37e] w-fit bg-opacity-20 rounded-full'><PiSealCheckFill className=' text-[#36b37e]'/></span>
                    <span className='text-dark-light text-xs italic'>Verified Blogger</span>
                  </div>
               </div>
              </div>
              <span className='font-bold text-dark-light text-sm'>
                20 oct
              </span>
            </div>
        </div>
    </div>
  )
}

export default ArticlesCard
