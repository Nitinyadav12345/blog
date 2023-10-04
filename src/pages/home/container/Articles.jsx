import React from 'react'
import ArticlesCard from '../../../components/ArticlesCard'
import {BsArrowRightCircle} from "react-icons/bs"


const Articles = () => {
  return (
    <section className='flex flex-col mx-auto container  px-5 py-10  '>
        <div className='md:gap-x-5 gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10'>
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]"/>
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]"/>
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]"/>
        <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-21px)]"/>
        </div>
          <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white'> 
          <span> More articles</span>
          <BsArrowRightCircle className='w-3 h-3'/>
          </button>
    </section>
  )
}

export default Articles
