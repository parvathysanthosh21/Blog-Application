import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editBlogAPI } from '../Services/allAPI';
import { editBlogResponseContext } from '../context/ContextShares';

function EditBlog({blog}) {
    const {editBlogResponse,setEditBlogResponse} = useContext(editBlogResponseContext)
    const [blogDetails, setBlogDetails] = useState({
        id:blog._id, title: blog.title, category: blog.category,subheading:blog.subheading, content: blog.content, blogImage:"",timeStamp:blog.timeStamp,username:blog.username
    })

    const [preview,setpreview] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () =>  {
    setShow(false);  
    setBlogDetails({
        id:blog._id, title: blog.title, category: blog.category,subheading:blog.subheading, content: blog.content,
         blogImage:"",timeStamp:blog.timeStamp
    })
    setpreview("")
 }
  const handleShow = () => setShow(true);
    useEffect(()=>{
        if(blogDetails.blogImage){
            setpreview(URL.createObjectURL(blogDetails.blogImage))
        }
    },[blogDetails.blogImage])
 console.log(blogDetails);
    const handleUpdate = async ()=>{
        const {id,title,category,subheading,content,blogImage,timeStamp,username} = blogDetails
        console.log(timeStamp);
        if (!title || !category ||!subheading || !content) {
            toast.info("Please Fill The Form Completely")
        }else {

            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("category", category)
            reqBody.append("subheading", subheading)
            reqBody.append("content", content)
            reqBody.append("username", username)
            reqBody.append("timeStamp", timeStamp)
            preview?reqBody.append("blogImage", blogImage):reqBody.append("blogImage",blog.blogImage)

            const token = sessionStorage.getItem("token")
            if(preview){
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            // api call
            const result = await editBlogAPI(id,reqBody,reqHeader)
            if(result.status===200){
                handleClose()
                // pass response to myblogs
                setEditBlogResponse(result.data)
            }else{
                // console.log(result);
                console.log(result.response.data)
            }
            }else{
                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
                // api call
                const result = await editBlogAPI(id,reqBody,reqHeader)
            if(result.status===200){
                handleClose()
                // pass response to myblogs
                setEditBlogResponse(result.data)

            }else{
                console.log(result);
                console.log(result.response.data)
            }
            }
        }
    }
    // console.log(blogDetails);
  return (
    <>
    <button onClick={handleShow} className='btn'><i class="fa-regular fa-pen-to-square me-1"></i></button>

    <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder' style={{ letterSpacing: '2px' }}>Edit Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="col-lg-6 mt-4">
                            <label>
                                <input type="file" style={{ display: 'none' }}  onChange={e=>setBlogDetails({...blogDetails,blogImage:e.target.files[0]})}/>
                                <img className='img-fluid' src={preview?preview:`${BASE_URL}/uploads/${blog.blogImage}`} alt="" />
                            </label>

                        </div>
                        <div>
                            <div className='mb-3 mt-5'>
                                <input type="text" className='form-control' placeholder='Blog Title' value={blogDetails.title}  onChange={e=>setBlogDetails({...blogDetails,title:e.target.value})}/>
                            </div>
                            <div className='mb-3 mt-2'>
                                <input type="text" className='form-control' placeholder='Blog SubTitle' value={blogDetails.subheading} onChange={e=>setBlogDetails({...blogDetails,subheading:e.target.value})}/>
                            </div>
                            <div className='mb-3 mt-2'>
                                <input type="text" className='form-control' placeholder='Category' value={blogDetails.category} onChange={e=>setBlogDetails({...blogDetails,category:e.target.value})}/>
                            </div>
                            <div className='mb-3 mt-2'>
                                <textarea className='form-control' id='exampleFormControlTextarea1' rows="6" placeholder='Type Your Blog.....' value={blogDetails.content} onChange={e=>setBlogDetails({...blogDetails,content:e.target.value})}></textarea>
                            </div>


                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} variant="dark">Update</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                theme="colored"
                autoClose={2000}
                position="top-right" />

    </>
  )
}

export default EditBlog