import React from 'react'
import { useState, useEffect } from 'react'
import   InputComment from './Post-Comment'
import Modal from './Modal'
import PostedComment from './Posted'
const Comment = () => {

const [comments, setComment] = useState([])
const [replies, setReply] = useState([])
const [scoreval, setScoreval] = useState()
const [loading, setLoading] = useState(true)
const [delclick, setdelClick] = useState(false)
const [replyId, setReplyId] = useState(0)
const [replyclick, setreplyclick] = useState(false)
const [message, setMessage] = useState('')
const [currentUser, setcurrentUser] = useState({})
const [commentreply, setCommentreply]= useState([])



const userobj = {
   user: currentUser,
     content:message,
     id:replyId
}
const getReplies=(id)=>{ return comments.filter(comment=>comment.id == id).sort((a,b)=>
   new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime())

}
function handleMessage(message,id){
   console.log('addtext', message,id)
!replyclick?setreplyclick(true):setreplyclick(false)
setMessage(message)
console.log(message)
}
const handleDelete=(id)=>{
 replies.filter(reply=>reply.id ==3 )
}

function handleclick(id){
   replies.filter(reply=>reply.id !== id )
   setReplyId(id)
   console.log(id)
   setreplyclick(false)
   setMessage('')
}
   useEffect(() => {
   
      const getData =  async() => {
        const data = await fetch('data.json',{
          headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
          }})

   
        const resp = await data.json()
        setLoading(false)
        console.log(resp.comments[1].replies)
        setComment(resp.comments)
        setReply(resp.comments[1].replies)
console.log(resp.comments.replies)
setCommentreply(resp.comments[0].replies)
setcurrentUser(resp.currentUser)
       }
       getData()
  
     }, [])

     if(loading){
      return <h1> Loading ...</h1>
   }
   
  
  return (
    <div className='container'>
       This is playing
{
comments.map(comment=>{
   const { id, content, createdAt, score, user,replies}= comment

   {/* console.log(score) */}
   const {image,username} = user
   const {png, webp}= image
   console.log(replies)

   return(
      <div key={id} className='reply-container'>
<div  className='user-profile'>

   <img src={png} alt='' className='user-img'/>
   <h4> {username} </h4>
   <span> {createdAt}</span> 
</div>

<div  className='main'>
   <p>{content}</p>

</div>
   <div className='score-card'>
      <div class='score-calc'>
      <svg onClick={()=>setScoreval(scoreval+1)} width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
        <span id='score-id'>{score}</span> 
       <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg> 
       </div>

   <div className='reply'> <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
      <button id='reply-text' onClick={()=>handleclick(id)} >Reply</button>
   </div>
</div>

{replyId == id? <InputComment buttonAction='REPLY' postClick={handleMessage}/>:null}
<div> 





<div>

{replies.length > 0 && (
   <div className='reply-contain'>
   {replies.map(reply=>{
      const { id, content, createdAt, score, user,replies}= reply
console.log(reply)
{/* console.log(score) */}
const {image,username} = user
const {png, webp}= image


return(
      <div key={id} className='comment-container'>
<div  className='user-profile'>

   <img src={png} alt='' className='user-img'/>
   <h4> {username} </h4>
   <span> {createdAt}</span> 
</div>

<div  className='main'>
   <p>{content}</p>

</div>
   <div className='score-card'>
      <div class='score-calc'>
      <svg onClick={()=>setScoreval(scoreval+1)} width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
        <span id='score-id'>{score}</span> 
       <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg> 
       </div>

   <div className='reply'> <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
      <button id='reply-text' onClick={()=>handleclick(id)} >Reply</button>
   </div>
</div>
{replyId == id && replyclick?replies.push(userobj):null}
</div>)
   })}
  
   </div>
)}


</div>


















</div>
</div>



   )
})
}





<InputComment buttonAction='SEND'/>

    </div>  )
}

export default Comment