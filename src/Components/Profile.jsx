import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../context/TokenAuth'
import EditProfile from './EditProfile'

function Profile() {
  const {isAuthorised, setAuthorised} = useContext(tokenAuthorisationContext)

  const navigate = useNavigate()
  const handleLogout = ()=>{
    // remove all existing item
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setAuthorised(false)
    // navigate to lnding page
    navigate('/')
  }
  return (
    <>
   <div  style={{marginTop:'90px'}} >
    <div className='d-flex align-items-center justify-content-center mb-2  w-100  rounded p-3 mt-5' >
    {/* <div className='w-100 d-flex align-items-end justify-content-center'>
      <button className='btn'><i class="fa-solid fa-pen ms-5"></i></button>
      </div> */}
      <div className='d-flex align-items-center justify-content-center flex-column'>
       <label>
        <input type='file' style={{display:'none'}}/>
        <img style={{borderRadius:'50%',height:'200px',width:'200px'}} className='img-fluid mb-3' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
        </label>
      
         <div>
           <h6 className='text-center'>Jenifer Mandrick</h6>
           <h6 className='text-center fw-bolder'>Writer</h6>
           <p className='text-center' style={{textAlign:'justify',width:'570px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita veritatis perferendis! Eligendi laborum modi necessitatibus voluptates corrupti molestiae cumque sed aperiam mollitia eaque labore dolorem cum qui, a repellendus!</p>
         </div>
         
      </div>
      <div className='d-flex align-items-center justify-content-center flex-column mt-5' style={{marginLeft:"5%"}}>
         <EditProfile/>
         
         <button onClick={handleLogout} className='btn'><i class="fa-solid fa-arrow-right-from-bracket fs-4 "></i></button>

         </div>
     </div>

</div>
    </>
  )
}

export default Profile