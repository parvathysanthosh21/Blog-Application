import { hover } from '@testing-library/user-event/dist/hover'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserBlogAPI, deleteBlogAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../Services/baseurl'
import { Card, Col, Row } from 'react-bootstrap';
import { addBlogResponseContext, editBlogResponseContext } from '../context/ContextShares';
import EditBlog from './EditBlog';

function MyBlogs() {
  const {editBlogResponse,setEditBlogResponse} = useContext(editBlogResponseContext)
  const {addBlogResponse,setAddBlogResponse} =  useContext(addBlogResponseContext)
   
  const [userBlogs, setUserBlogs] = useState([])
  const getUserBlogs = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await UserBlogAPI(reqHeader)
      if (result.status === 200) {
        setUserBlogs(result.data)
      } else {
        console.log(result);
        toast.warning(result.response.data)
      }
    }
  }
  useEffect(() => {
    getUserBlogs()
  }, [addBlogResponse,editBlogResponse])
  console.log(userBlogs);

  const token = sessionStorage.getItem("token")

 const handleDelete = async (id)=>{
const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await deleteBlogAPI(id,reqHeader)
                if(result.status===200){
                  // page reload
                  getUserBlogs()
                }else{
                  toast.error(result.response.data)
                }
 }

  return (
    <>
      <Row className='ms-5 me-5 mt-5'>

    {  userBlogs?.length>0?userBlogs.map(blog=>(

       <Col sm={12} md={4} lg={4}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={blog?`${BASE_URL}/uploads/${blog?.blogImage}`:"https://imagedelivery.net/wKQ19LTSBT0ARz08tkssqQ/www.courthousenews.com/2023/06/meta-logo-vivatech-show.jpg/w=1880"} alt="blogimage" />
            <Card.Body>
              <Card.Title>{(blog.category).slice(0,50)}</Card.Title>
              <h3 className='fw-bolder'><Link className='text-dark' style={{ textDecoration: hover ? 'underline' : 'none' }} to={`/blogsview/${blog?._id}`}>{blog.title}</Link></h3>
              <Card.Text>
                {(blog.content).slice(0,200)}....
              </Card.Text>
              <Card.Text>
                {blog.timeStamp}
              </Card.Text>
              <div className='me-auto d-flex align-items-end justify-content-end mt-3 mb-3'>
           
                <EditBlog blog={blog}/>
                <button onClick={()=>handleDelete(blog._id)} className='btn'><i class="fa-solid fa-trash"></i></button>
              </div>
  
            </Card.Body>
          </Card>
       </Col>
    )):null
    
      }
            </Row>

      <ToastContainer
        theme="colored"
        autoClose={2000}
        position="top-right" />
    </>
  )
}

export default MyBlogs