import React from 'react'
import CommentForm from "./CommentForm"
import images from "../../constants/images"
import {MdQuickreply,MdModeEditOutline,MdOutlineDeleteSweep} from "react-icons/md"


const Comment = ({Commentdata,logginedUserId,setaffectedComment,affectedComment,addComment,parentId = null , updateComment,deleteComment,replies}) => {
    //console.log(Commentdata)

    const isUserLogined = Boolean(logginedUserId);
    const commentBelongsToUser = logginedUserId === Commentdata.user._id;
    const isReplying = affectedComment && affectedComment.type === "replying" && affectedComment._id === Commentdata._id;
    const isEditing = affectedComment && affectedComment.type === "editing" && affectedComment._id === Commentdata._id;

    const repliedCommentId = parentId ? parentId : Commentdata._id;
    const replyOnUserId = Commentdata._id;
  return (
    <div className='flex flex-nowrap gap-x-3 items-start bg-[#f2f4f5] p-3 rounded-lg'>
       <img src={images.postprofileImage} alt=" User Profile" className='w-9 h-9 object-cover rounded-full  ' />
       <div className='flex-1 flex flex-col'>
            <h5 className='font-bold text-dark-hard text-xs lg:text-sm'> {Commentdata?.user?.name}</h5>
            <span className=' text-xs text-dark-light'>{new Date(Commentdata?.createdAt).toLocaleDateString("en-IN",{
                            day:"numeric",
                            month:"short",
                            year:"numeric",
                            hour:"2-digit"
                        })}
            </span>
            {
                !isEditing && <p className=' font-opensans mt-[10px] text-sm text-dark-light'>
                {
                    Commentdata?.desc
                }
            </p>
            }
            
            {
                isEditing && (<CommentForm btnlabel="Update" formSubmitHandler={(value)=> updateComment(value,Commentdata._id)} formCancelHandler={()=>setaffectedComment(null)}
                initialText = {Commentdata.desc}/>)
            }
            <div className=' mt-3 items-center mb-3 flex text-sm text-dark-light gap-x-4'>
                {
                    isUserLogined && ( <button className='flex items-center space-x-1' onClick={()=>setaffectedComment({
                        type:"replying", _id:Commentdata._id
                    })}>
                    <MdQuickreply className='w-4 h-auto'/>
                    <span>Reply</span>
                </button>)
                }
                {
                    commentBelongsToUser && (<>
                        <button className='flex  items-center space-x-1'>
                    <MdModeEditOutline className='w-4 h-auto' onClick={()=>setaffectedComment({
                        type:"editing", _id:Commentdata._id
                    })}/>
                    <span>Edit</span>
                </button>
                        <button className='flex items-center space-x-1 ' onClick={()=> deleteComment(Commentdata._id)}>
                            <MdOutlineDeleteSweep className='w-4 h-auto'/>
                            <span>Delete</span>
                        </button></>)
                }  
            </div>
            {
                isReplying && <CommentForm btnlabel="Reply" formSubmitHandler={(value)=> addComment(value,repliedCommentId,replyOnUserId)}
                formCancelHandler={()=>setaffectedComment(null)}/>
            }
            {
                replies.length > 0 && <div>
                    {
                        replies.map((reply)=>(<Comment key={reply._id} addComment={addComment} affectedComment={affectedComment} setaffectedComment={setaffectedComment} Commentdata={reply}
                        deleteComment={deleteComment}
                        logginedUserId={logginedUserId} 
                        replies={[]} 
                        updateComment={updateComment}
                        parentId={Commentdata._id}/>))
                    }
                </div>
            }
       </div>

    </div>
  )
}

export default Comment
