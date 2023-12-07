import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
    <>
<div className='d-flex mt-5 ms-5'>
 <div>
  <img style={{width:'350px'}} src="https://trak.in/wp-content/uploads/2013/02/Tech-News-main-001.jpg" alt="blogimage" />
 </div>
 <div className='ms-5'>
  <h6>Category</h6>
  <h3 className='fw-bolder'><Link className='text-dark'  style={{textDecoration:hover ? 'underline':'none'}} to={'/blogsview'}>Wagner Mutiny Puts Russia’s Military Bloggers on a Razor’s Edge</Link></h3>

  <h6>By joel Nathan</h6>
 </div>
</div>
<hr className='ms-5' style={{width:"75%"}}/>
    </>
  )
}

export default BlogCard