import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../context/TokenAuth'
import EditProfile from './EditProfile'
import { editProfileResponceContext } from '../context/ContextShares'
import { BASE_URL } from '../Services/baseurl'

function Profile() {
  const {isAuthorised, setAuthorised} = useContext(tokenAuthorisationContext)
  const {editProfileResponce,setEditProfileResponce} = useContext(editProfileResponceContext)
  const [userDetails,setUserDetails] = useState({
    username:"",profession:"",bio:"",website:"",profile:"",id:""
  })

  const navigate = useNavigate()
  const handleLogout = ()=>{
    // remove all existing item
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setAuthorised(false)
    // navigate to lnding page
    navigate('/')
  }
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("existingUser"))
    setUserDetails({...userDetails,username:user.username,profession:user.profession,bio:user.bio,id:user._id,profile:user.profile})
  },[editProfileResponce])
  return (
    <>
   <div  style={{marginTop:'90px'}} >
    <div className='d-flex align-items-center justify-content-center mb-2  w-100  rounded p-3 mt-5' >
   
      <div className='d-flex align-items-center justify-content-center flex-column'>
       <label>
        <input type='file' style={{display:'none'}}/>
        <img style={{borderRadius:'50%',height:'200px',width:'200px'}} className='img-fluid mb-3' src={userDetails.profile?`${BASE_URL}/uploads/${userDetails.profile}`: "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg"} alt="" />
        </label>
      
         <div>
           <h6 className='text-center'>{userDetails.username}</h6>
           <h6 className='text-center fw-bolder'>{userDetails.profession}</h6>
           <p className='text-center' style={{textAlign:'justify',width:'570px'}}>{userDetails.bio}</p>
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