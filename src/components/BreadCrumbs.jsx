import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({data}) => {
    console.log(data)
  return (
    <div className='flex item-center py-4 overflow-x-auto whitespace-nowrap '>
      {
        data.map((item,index)=>{
               return <div className='text-black opacity-50 text-xs font-roboto md:text-sm'>
                    <Link key={index} to={item.link}>{item.name}
                    {
                        index !== data.length -1 && <span className='px-3'>/</span>
                    }
                    </Link>
                </div>
        })
      }
    </div>
  )
}

export default BreadCrumbs
