import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SuggestedPost from './container/SuggestedPost'
import CommentContainer from '../../components/comments/CommentContainer'
import SocialShareButtons from '../../components/SocialShareButtons'

const breadCrumbsData = [
  {
    name:"Home",
    link:"/"
  },
  {
    name:"Blog",
    link:"/blog"
  },
  {
    name:"Articles title",
    link:"/blog/1"
  }
  
]

const postData = [
  {
    _id:"1",
    image : images.post1Image,
    title : "HElp children get the better education",
    createdAt: "2023-01-28T15:35:53.607+0000"
  },
  {
    _id:"2",
    image : images.post1Image,
    title : "HElp children get the better education",
    createdAt: "2023-01-28T15:35:53.607+0000"
  },
  {
    _id:"3",
    image : images.post1Image,
    title : "HElp children get the better education",
    createdAt: "2023-01-28T15:35:53.607+0000"
  },
  {
    _id:"4",
    image : images.post1Image,
    title : "HElp children get the better education",
    createdAt: "2023-01-28T15:35:53.607+0000"
  }
]

const tagsData = [
  "Medical","LifeStyle" , "Learn" , "Healty" , " Food" ,"Diet" , "Education"
]

const ArticleDetailPage = () => {
  return (
    <MainLayout>
       <section className=' container mx-auto max-w-5xl flex flex-col lg:flex-row lg:gap-x-5 lg:items-start px-5'>
          <article className='flex-1'>
              <BreadCrumbs data={breadCrumbsData}/>
              <img className='w-full rounded-xl ' src={images.post1Image} alt="laptop" />
              <Link to='/blog?category=SelectedCategory' className='text-primary text-sm font-roboto inline-block mt-4 md:text-base'>
                Education
              </Link>
              <h1 className=' text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>
                  Help children get better education
              </h1>
              <div className='mt-4 text-dark-soft'>
                <p className=' leading-7'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque iure unde eum laboriosam incidunt rerum earum repudiandae ea. Reiciendis quia consequuntur rem eos aliquid beatae soluta culpa suscipit asperiores magni.
                  Quasi at quidem voluptatum! Recusandae dolores a provident nobis quidem ducimus commodi velit porro aliquid reprehenderit rem reiciendis eveniet magnam totam maiores delectus vitae quibusdam eos, quasi fuga in? Ipsam.
                  Repudiandae, porro velit omnis odio, necessitatibus quasi quis perspiciatis vero, totam adipisci ipsam. Voluptatum eos, vero sequi officia odio mollitia itaque, illum laudantium amet a dolore ea rerum fugit nam?
                  Quae provident totam recusandae est, ratione, illo perspiciatis amet eligendi eius cupiditate non nam deleniti sequi? Temporibus ipsum totam expedita culpa distinctio, magnam praesentium iure vero recusandae, explicabo corporis placeat.
                  Odit incidunt libero corporis sint quae soluta similique illum corrupti sequi deserunt, dignissimos, vero maxime nobis sed beatae error? Earum dignissimos amet saepe tenetur tempore quis voluptates adipisci quas voluptas.
                </p>
              </div>
              <CommentContainer  className=" mt-10" logginedUserId="a"/>
          </article>
          <div>
          <SuggestedPost header="Latest Articles" post ={postData} tags ={tagsData} className="mt-8 lg:mt-0 lg:max-w-xs"/>
           <div className=' mt-7'>
              <h2 className=' font-roboto text-dark-hard mb-4 font-medium mb:text-xl'>Share on:</h2>
              <SocialShareButtons url= "https://www.freecodecamp.org/" title="MERN stack Blog app"/>
           </div>
          </div>
         
       </section>
    </MainLayout>
  )
}

export default ArticleDetailPage
