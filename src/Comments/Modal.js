import React, { useState } from 'react'

const Modal = () => {
const [btnClicked, setbtnClicked] = useState(false)
const [closeClicked, setcloseClicked] = useState(false)
window.onclick= function(e){

}
function handlecloseClick(){
   !closeClicked?setcloseClicked(true):setcloseClicked(false)
   setbtnClicked(false)
}
function handleopenClick(){
   if(!btnClicked)
   {setbtnClicked(true)}
   else{ 
      setbtnClicked(false)
   }
   setcloseClicked(false)
}
  return (
<>
<div className="container" id="myContainer">
   <div id="myModal" className={!btnClicked?" is-hidden is-visuallyHidden":'Modal ModalOpen'}>
  <div className="Modal-content">
    <h3>Delete comment</h3>
    <p> Are you sure you want to delete this comment?This will remove the comment and cant be undone.</p>
 <div>
    <button> NO, CANCEL</button>
    <button id="closeModal" className={closeClicked? "Close":""} onClick={handlecloseClick}>YES,DELETE</button>

 </div>
  </div>
</div>
<button  className=''  id="myBtn"  onClick={handleopenClick}>Send Comment</button>

</div>


</>


  )
}

export default Modal