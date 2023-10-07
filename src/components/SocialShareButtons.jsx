import React from 'react'
import {BiLogoFacebookSquare} from "react-icons/bi"
import {FaWhatsappSquare} from "react-icons/fa"
import {BsReddit,BsTwitter} from "react-icons/bs"

const SocialShareButtons = ({url,title}) => {
  return (
    <div className='w-full justify-between flex'>
      <a target='_blank' rel='noreferrer' href={`https://www.facebook.com/dialog/share?app_id=1180206992856877&display=popup&href=${url}`}>
          <BiLogoFacebookSquare className='text-[#3b5998] w-12 h-auto'/>
      </a>
      <a target='_blank' rel='noreferrer' href={`https://twitter.com/intent/tweet?url=${url}`}>
          <BsTwitter className='text-[#00acee] w-12 h-auto'/>
      </a>
      <a target='_blank' rel='noreferrer'  href={`http://www.reddit.com/submit?url=${url}&title=${title}`}>
          <BsReddit className='text-[#FF4500] w-12 h-auto'/>
      </a>
      <a target='_blank' rel='noreferrer' href={`https://api.whatsapp.com/send/?text=${url}`}>
          <FaWhatsappSquare className='text-[#25d366] w-12 h-auto'/>
      </a>
    </div>
  )
}

export default SocialShareButtons
