import React from 'react'
import {useState} from 'react'
import Modal from './Modal'
const Post_Comment = ({buttonAction}) => {
   const [message, setMessage] = useState('')
   const [post, setPost] =  useState(false)
   const [btnclick, setbtnClick] =  useState(false)

const type=(e)=>{
   const text = e.target.value
   setMessage(text)
}

// // text.onclick = function(event){
// //    console.log(event.target.value)
// }


  return (
    <div>
       <div className = 'comment-box'>
<input id='inp' onChange={type}  type='text' placeholder='Add a comment'/>
<div className='low-box' >
{message}
   <img src='./images/avatars/image-juliusomo.webp' alt=''/>
   <button id='send-btn' onClick={()=>setbtnClick(true)}> {buttonAction}
</button>
</div>

</div>

    </div>
  )

}

export default Post_Comment