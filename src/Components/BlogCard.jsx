import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../Services/baseurl'

function BlogCard({blog}) {
  return (
    <>

{ blog&&
  <div className='d-flex mt-5 ms-5'>
 <div>
  <img style={{width:'350px'}} src={blog?`${BASE_URL}/uploads/${blog?.blogImage}`:"https://imagedelivery.net/wKQ19LTSBT0ARz08tkssqQ/www.courthousenews.com/2023/06/meta-logo-vivatech-show.jpg/w=1880"} alt="blogimage" />
 </div>
 <div className='ms-5'>
  <h6 className='mt-5'>{blog?.category}</h6>
  <h3 className='fw-bolder'><Link className='text-dark'  style={{textDecoration:hover ? 'underline':'none'}} to={`/blogsview/${blog?._id}`}>{blog.title}</Link></h3>

  <h6>By {blog?.username}</h6>
  
 </div>
</div>
}

<hr className='ms-5' style={{width:"75%"}}/>
    </>
  )
}

export default BlogCard