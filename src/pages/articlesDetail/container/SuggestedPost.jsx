import React from 'react'
import { Link } from 'react-router-dom'

const SuggestedPost = ({className,header, post =[],tags}) => {
  return (
    <div className={`w-full shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-lg p-4 ${className} mb-8`}>
      <h2 className=' font-roboto font-medium text-dark-hard md:text-xl'>{header}</h2>
       <div className='grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
        {
            post.map((item)=>{
                return <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
                    <img src={item.image} alt="laptop" className='aspect-square object-cover rounded-lg w-1/5'/>
                    <div className='text-sm text-dark-hard font-medium font-roboto'>
                        <h3 className='md:text-base lg:text-lg' >{item.title}</h3>
                        <span className=' text-xs opacity-60'>{new Date(item.createdAt).toLocaleDateString("en-IN",{
                            day:"numeric",
                            month:"short",
                            year:"numeric"
                        })}</span>
                    </div>
                </div>
            })
        }
       </div>
       <h2 className=' font-roboto mt-8  font-medium text-dark-hard md:text-xl' >Tags</h2>
       <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
            {
                tags.map((item)=>{
                    return <Link className='inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm' to="/">
                    {item}
                 </Link>
                })
            }
       </div>
    </div>
  )
}
export default SuggestedPost
