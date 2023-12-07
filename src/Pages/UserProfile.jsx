import React from 'react'
import Profile from '../Components/Profile'
import MyBlogs from '../Components/MyBlogs'

function UserProfile() {
  return (
    <div>
      <Profile/>
      <hr  className='ms-5 me-5 mb-5' style={{width:"100%"}}/>
      <MyBlogs/>
    </div>
  )
}

export default UserProfile