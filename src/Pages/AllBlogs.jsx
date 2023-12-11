import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogCard from '../Components/BlogCard'
import { allBlogsAPI } from '../Services/allAPI'

function AllBlogs() {
  const [searchKey,setSearchKey] = useState("")
  const [allblogs,setAllblogs] = useState([])
  const getallBlogs = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allBlogsAPI(searchKey,reqHeader)
      if(result.status===200){
setAllblogs(result.data)
      }else{
        console.log(result);
      }
    }
  }
   useEffect(()=>{
getallBlogs()
   },[searchKey])
  return (
    <>
     <div style={{ marginTop: '100px' }} className='projects'>
        {/* <h2 className='text-center fw-bolder mb-5 mt-5'>Latest News</h2> */}
        <div className='d-flex justify-content-center align-items-center w-100 mt-5'>
          <div className="d-flex border w-50 rounded">

            <input type="text" className='form-control' placeholder='Search News By Technologies'  onChange={e=>setSearchKey(e.target.value)}/>

            <i style={{ marginLeft: '-45px', marginTop: '13px' }} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
       {/* all blogs */}
  <div className="all-blogs mt-5">
    <h1 className='text-center fw-bolder'>Latest News</h1>
    <Row>
      {allblogs?.length>0?allblogs?.map(blog=>(
        <div sm={12} md={6} lg={6}>
      <BlogCard blog={blog}/>
      </div>
      )):null
        
      }
     
    </Row>
  </div>
      </div>
    </>
  )
}

export default AllBlogs