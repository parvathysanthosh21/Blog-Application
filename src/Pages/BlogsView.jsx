import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetABlogAPI } from '../Services/allAPI';
import { BASE_URL } from '../Services/baseurl';

function BlogsView() {
  const {_id} = useParams()
  console.log(_id);
  const [currentUser,setCurrentUser] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setCurrentUser(JSON.parse(sessionStorage.getItem("existingUser"))._id)
    }
  },[])
  const [blogDetails,setBlogdetails] = useState([])
  const handleView = async(id)=>{
    // api call
    const result = await GetABlogAPI(id)
    if(result.status===200){
      setBlogdetails(result.data)
    }else{
      console.log(result);
    }
  }
  useEffect(()=>{
    handleView(_id)
  },[])
  console.log(blogDetails);
  return (
    <div style={{marginTop:'100px'}}>
      <div className='d-flex text-dark mt-5 ms-2'>

     { currentUser?
      currentUser !== blogDetails.userId ?
     <Link style={{textDecoration:'none',color:'white'}} to={`/profile/${blogDetails.userId}`}><button style={{backgroundColor:'black'}} className='p-1 ms-5 text-light'>{blogDetails.username}</button></Link>:
     <Link style={{textDecoration:'none',color:'white'}} to={`/userprofile`}><button style={{backgroundColor:'black'}} className='p-1 ms-5 text-light'>{blogDetails.username}</button></Link>
    :
    <button style={{backgroundColor:'black'}} className='p-1 ms-5 text-light'>{blogDetails.username}</button>
    }

    <h5 className='ms-3 mt-2 fw-bolder'>{blogDetails.category}</h5>
    <h6 className='ms-3 mt-2'>{blogDetails.timeStamp}</h6>
      </div>
      <div className='ms-5 mt-5 me-5'>
        <h1 className=' fw-bolder'>{blogDetails.title}</h1>
        <h4 className=' fw-bolder'>{blogDetails.subheading}</h4>
      </div>
      <div  className='ms-5 mt-5 me-5'>
        <img style={{width:'70%'}} className='d-flex justify-content-center align-items-center' src={blogDetails?`${BASE_URL}/uploads/${blogDetails?.blogImage}`:null} />
        <p className='mt-5' style={{textAlign:'justify',fontSize:'18px',lineHeight:'30px',width:'75%'}}>{blogDetails.content} </p>
      </div>
      
    </div>
  )
}

export default BlogsView