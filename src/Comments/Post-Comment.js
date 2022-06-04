import React from 'react'
import {useState} from 'react'
import Modal from './Modal'
import PostedComment from './Posted'
const InputComment = ({buttonAction, postClick}) => {
   const [message, setMessage] = useState('')
   const [btnclick, setbtnClick] =  useState(false)
   const [move, setMove]= useState(false)

const type=(e)=>{
   const text = e.target.value
   setMessage(text)
}
const TxtAreadisabled = message.length == 0

// function postClick(){
//    !btnclick?setbtnClick(true):setbtnClick(false)
// }
// text.onclick = function(event){
//    console.log(event.target.value)

  return (
    <div>
       <div className = 'comment-box'>
<textarea id='inp' onChange={type}  type='text' placeholder='Add a comment' value={message}/>
<div className='low-box' >

   <img src='./images/avatars/image-juliusomo.webp' alt=''/>
   <button id='send-btn' onClick={()=>postClick(message)} > {buttonAction}
</button>
</div>

</div>

    </div>
  )
}

export default InputComment