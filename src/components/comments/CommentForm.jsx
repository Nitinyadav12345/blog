import React, { useState } from 'react'

const CommentForm = ({btnlabel , formSubmitHandler,formCancelHandler=null,initialText = ""}) => {

    const [value , setValue] = useState(initialText);

    const submitHandler = (e)=>{
        e.preventDefault();
        formSubmitHandler(value);
        setValue(" ");
    }
  return (
    <form onSubmit={submitHandler}>
       <div className='flex flex-col border items-end p-4 border-primary rounded'>
         <textarea className='w-full focus:outline-none bg-transparent' rows="5" placeholder='Leave Your comment here...' value={value} onChange={(e)=>{
            setValue(e.target.value)
         }}></textarea>
        <div className=' flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row'>
          {
            formCancelHandler && <button onClick={formCancelHandler} className=' px-6 py-2.5 border rounded-lg border-red-500 font-semibold text-white bg-red-500 '>
              Cancel
            </button>
          }
        <button type='submit' className='px-6 py-2.5 bg-primary font-semibold text-white rounded-lg '>{btnlabel}</button>
        </div>
        
       </div>
    </form>
  )
}

export default CommentForm
