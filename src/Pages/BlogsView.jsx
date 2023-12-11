import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetABlogAPI } from '../Services/allAPI';
import { BASE_URL } from '../Services/baseurl';

function BlogsView() {
  const {_id} = useParams()
  console.log(_id);
  // const [blogId, setBlogId] = useState("")
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
    <button style={{backgroundColor:'black'}} className='p-1 ms-5 text-light'>{blogDetails.username}</button>
    {/* <div className="text-center mt-5 mb-5"> <Link className='text-dark fs-5' to={'/allblogs'}>View More News</Link></div> */}

    <h6 className='ms-3 mt-2 fw-bolder'>{blogDetails.category}</h6>
    <h6 className='ms-3 mt-2 fw-bolder'>{blogDetails.timeStamp}</h6>
      </div>
      <div className='ms-5 mt-5 me-5'>
        <h1 className=' fw-bolder'>{blogDetails.title}</h1>
        <h4>{blogDetails.subheading}</h4>
      </div>
      <div  className='ms-5 mt-5 me-5'>
        <img style={{width:'70%'}} className='d-flex justify-content-center align-items-center' src={blogDetails?`${BASE_URL}/uploads/${blogDetails?.blogImage}`:null} />
        <p className='mt-5' style={{textAlign:'justify',fontSize:'18px',lineHeight:'30px',width:'75%'}}>{blogDetails.content} </p>
      </div>
      <div className='me-auto d-flex align-items-end justify-content-start mt-5 ms-5'>
               <i class="fa-regular fa-heart me-3"></i>
               <i class="fa-regular fa-message"></i>
          </div>
    </div>
  )
}

export default BlogsView