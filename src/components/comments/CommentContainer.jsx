import React, { useEffect, useState } from 'react';
import { getCommentsData } from '../../data/comments';
import CommentForm from './CommentForm';
import Comment from './Comment';

const CommentContainer = ({className,logginedUserId}) => {

  const [comments ,setComments] = useState([]);

  const mainComments = comments.filter((comment)=> comment.parent === null)

  const [affectedComment ,setaffectedComment] = useState(null);

  console.log(comments);

  useEffect(()=>{
    (async()=>{
      const commenData = await getCommentsData();
      setComments(commenData);
    })();
  },[]);

  const addCommentHandler = (value , parent=null , replyOnUser = null)=>{
      const newComment ={
          _id: Math.random().toString(),
          user: {
            _id: "a",
            name: "Mohammad Rezaii",
          },
          desc: value,
          post: "1",
          parent: parent,
          replyOnUser: replyOnUser,
          createdAt: new Date().toISOString(),
      };
    setComments((curState)=>{
      return [newComment,...curState];
    });
    setaffectedComment(null);
  };

  const updateCommentHandler = (value,commentId)=>{
    const updateComment = comments.map((comment)=>{
      if (comment._id === commentId){
        return {...comment , desc:value}
      }
      return comment;
    });
    setComments(updateComment);
    setaffectedComment(null);
  }

  const deleteCommentHandler = (commentId)=>{
    const updatedComment = comments.filter((comment)=>{
      return comment._id !== commentId;
    });
    setComments(updatedComment);

  };

  const getRepliesHandler = (commentId)=>{
    return comments.filter((comment)=> comment.parent === commentId)
    .sort((a,b)=>{
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  }

  return (
    <div className={`${className}`}>
      <CommentForm btnlabel="Send" formSubmitHandler={(value)=>{addCommentHandler(value)}}/>
      <div className='space-y-4 mt-8 mb-3'>
        {
          mainComments.map((comment,index)=>{
            return <Comment key={index} Commentdata={comment} logginedUserId={logginedUserId} affectedComment={affectedComment}
            setaffectedComment={setaffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies = {getRepliesHandler(comment._id)}/>
          })
        }
      </div>
    </div>
  )
}

export default CommentContainer
