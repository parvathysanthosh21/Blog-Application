import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUserBlogsAPI, getUserProfileAPI } from '../Services/allAPI'
import { BASE_URL } from '../Services/baseurl'
import { Card, Col, Row } from 'react-bootstrap'
import { hover } from '@testing-library/user-event/dist/hover'

function Profile() {
    const {userId} = useParams()
    const [userProfile, setUserProfile] = useState({})
    const [userBlogs, setuserBlogs] = useState([])
    const getProfileDetails = async (id)=>{
        //   api call
        const result = await getUserProfileAPI(id)
        const blogResult = await getUserBlogsAPI(id)
        if(result.status===200){
            setUserProfile(result.data)
            setuserBlogs(blogResult.data)
        }else{
            console.log(result);
        }
        }
        useEffect(()=>{
            getProfileDetails(userId)
        },[])

    console.log(userBlogs,userProfile);
  return (
    <div  style={{marginTop:'90px'}} >
    <div className='d-flex align-items-center justify-content-center mb-2  w-100  rounded p-3 mt-5' >
   
      <div className='d-flex align-items-center justify-content-center flex-column'>
       <label>
        <input type='file' style={{display:'none'}}/>
        <img style={{borderRadius:'50%',height:'200px',width:'200px'}} className='img-fluid mb-3' src={userProfile.profile?`${BASE_URL}/uploads/${userProfile.profile}`: "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg"} alt="" />
        </label>
      
         <div>
           <h6 className='text-center'>{userProfile.username}</h6>
           <h6 className='text-center fw-bolder'>{userProfile.profession}</h6>
           <p className='text-center' style={{textAlign:'justify',width:'570px'}}>{userProfile.bio}</p>
         </div>
      </div>
     </div>

     <Row className='ms-5 me-5 mt-5'>

{  userBlogs?.length>0?userBlogs.map(blog=>(

   <Col sm={12} md={4} lg={4}>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={blog?`${BASE_URL}/uploads/${blog?.blogImage}`:"https://imagedelivery.net/wKQ19LTSBT0ARz08tkssqQ/www.courthousenews.com/2023/06/meta-logo-vivatech-show.jpg/w=1880"} alt="blogimage" />
        <Card.Body>
          <Card.Title>{blog.category}</Card.Title>
          <h3 className='fw-bolder'><Link
           className='text-dark' style={{ textDecoration: hover ? 'underline' : 'none' }} to={`/blogsview/${blog?._id}`}>{blog.title}</Link></h3>
          <Card.Text>
            {(blog.content).slice(0,200)}....
          </Card.Text>
          <Card.Text>
            {blog.timeStamp}
          </Card.Text>
        </Card.Body>
      </Card>
   </Col>
)):null

  }
        </Row>

</div>
  )
}

export default Profile