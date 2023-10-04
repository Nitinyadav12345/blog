import React from 'react'

const SuggestedPost = ({className,header, post =[]}) => {
  return (
    <div className={`w-full shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-lg p-4 ${className}`}>
      <h2 className=' font-roboto font-medium text-dark-hard'>{header}</h2>
       <div className='grid gap-y-5 mt-5'>
        {
            post.map((item)=>{
                return <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
                    <img src={item.image} alt="laptop" className='aspect-square object-cover rounded-lg w-1/5'/>
                    <div>
                        <h3 className='text-sm text-dark-hard font-medium font-roboto'>{item.title}</h3>
                    </div>
                </div>
            })
        }
       </div>
    </div>
  )
}
export default SuggestedPost
