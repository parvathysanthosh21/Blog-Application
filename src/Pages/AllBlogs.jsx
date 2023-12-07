import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogCard from '../Components/BlogCard'

function AllBlogs() {
  return (
    <>
     <div style={{ marginTop: '100px' }} className='projects'>
        {/* <h2 className='text-center fw-bolder mb-5 mt-5'>Latest News</h2> */}
        <div className='d-flex justify-content-center align-items-center w-100 mt-5'>
          <div className="d-flex border w-50 rounded">
            <input type="text" className='form-control' placeholder='Search News By Technologies' />
            <i style={{ marginLeft: '-45px', marginTop: '13px' }} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
       {/* all blogs */}
  <div className="all-blogs mt-5">
    <h1 className='text-center fw-bolder'>Latest News</h1>
    <Row>
      <div sm={12} md={6} lg={6}>
      <BlogCard/>
      </div>
      <div sm={12} md={6} lg={6}>
      <BlogCard/>
      </div>
      <div sm={12} md={6} lg={6}>
      <BlogCard/>
      </div>
      <div sm={12} md={6} lg={6}>
      <BlogCard/>
      </div>
    </Row>
  </div>
      </div>
    </>
  )
}

export default AllBlogs