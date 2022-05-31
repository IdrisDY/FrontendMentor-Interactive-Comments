import React from 'react'
import {useState} from 'react'

const Post_Comment = () => {
   const [message, setMessage] = useState('')
   const [post, setPost] =  useState(false)

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
   <button id='send-btn'> SEND</button>
</div>

</div>

    </div>
  )

}

export default Post_Comment