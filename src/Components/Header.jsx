import React, { useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../Services/baseurl'

function Header(loginResponse) {
  const [loggedin,setLoggedin] = useState(false)
  const [userName,setUsername] = useState("")
  const [userProfile, setUserProfile] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
      setUserProfile(JSON.parse(sessionStorage.getItem("existingUser")).profile)
    }else{
      setLoggedin(false)
    }
  },[loginResponse])
  return (
    <>
<Navbar style={{ backgroundColor: 'black' ,zIndex:"1",marginBottom:'25px'}} className="position-fixed top-0 w-100" >
        <Container>
          <Navbar.Brand>
            <Link to={'/'}  style={{ textDecoration: 'none', color: 'white',fontSize:'60px',fontWeight:'700' }}>
               TNO
              
            </Link>
          </Navbar.Brand>
        { loggedin ?
            <Link style={{textDecoration:'none',color:"white"}} to={'/userprofile'} className='d-flex align-items-center me-5'><img  style={{height:'40px',width:'40px',borderRadius:'50%'}} className='me-2' src={userProfile?`${BASE_URL}/uploads/${userProfile}`:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="" /><h5 className='mt-3 '>{userName}</h5></Link>
            :
            <Link style={{textDecoration:'none',color:"white"}} to={'/login'}><h5>LOGIN</h5></Link>
            }

                 </Container>
      </Navbar>
    </>
  )
}

export default Header

