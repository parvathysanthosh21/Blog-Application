import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBlogAPI } from '../Services/allAPI';
import {addBlogResponseContext } from '../context/ContextShares.jsx';
function AddBlogs() {
    const {addBlogResponse,setAddBlogResponse} = useContext(addBlogResponseContext)
    const [show, setShow] = useState(false);
    const [blogDetails, setBlogDetails] = useState({
        title: "", category: "",subheading:"", content: "", blogImage: ""
    })
    const [preview, setpreview] = useState("")
    const [token, setToken] = useState("")

    const handleClose = () => {
        setShow(false);
        setBlogDetails({
            title: "", category: "", subheading:"", content: "", blogImage: ""
        })
        setpreview("")
    }
    const handleShow = () => setShow(true);
    //   console.log(blogDetails);
    useEffect(() => {
        if (blogDetails.blogImage) {
            setpreview(URL.createObjectURL(blogDetails.blogImage))
        }
    }, [blogDetails.blogImage])

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        } else {
            setToken("")
        }
    }, [])
    const handleAdd = async (e) => {
        e.preventDefault()
        const {title, category,subheading, content, blogImage,timeStamp} = blogDetails
        if (!title || !category ||!subheading || !content || !blogImage) {
            toast.info("Please Fill The Form Completely")
        }else {
            let date = new Date()
            let options ={
                weekdays:"long",
                year:"numeric",
                month:"long",
                day:"numeric"
            };
            let timeStamp = new Intl.DateTimeFormat("en-US",options).format(date)
            console.log(timeStamp);
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("category", category)
            reqBody.append("subheading", subheading)
            reqBody.append("content", content)
            reqBody.append("blogImage", blogImage)
            reqBody.append("timeStamp", timeStamp)

            if (token) {
              const   reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addBlogAPI(reqBody,reqHeader)
                if (result.status === 200) {
                    console.log(result.data);
                    handleClose()
                    setAddBlogResponse(result.data)
                }else {
                    console.log(result);
                    toast.warning(result.response.data);
                }
            }
        }
    }
    return (

        <div>
            <div className='d-flex justify-content-end align-items-end me-5'>
                <button onClick={handleShow} style={{ backgroundColor: 'black', width: '150px' }} className='p-1 ms-5 text-light'>Add Vlogs</button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder' style={{ letterSpacing: '2px' }}>Add A New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="col-lg-6 mt-4">
                            <label>
                                <input type="file" style={{ display: 'none' }} onChange={e => setBlogDetails({ ...blogDetails, blogImage: e.target.files[0] })} />
                                <img className='img-fluid' src={preview ? preview : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"} alt="" />
                            </label>

                        </div>
                        <div>
                            <div className='mb-3 mt-5'>
                                <input type="text" className='form-control' placeholder='Blog Title' value={blogDetails.title} onChange={e => setBlogDetails({ ...blogDetails, title: e.target.value })} />
                            </div>
                            <div className='mb-3 mt-2'>
                                <input type="text" className='form-control' placeholder='Blog SubTitle' value={blogDetails.subheading} onChange={e => setBlogDetails({ ...blogDetails, subheading: e.target.value })} />
                            </div>
                            <div className='mb-3 mt-2'>
                                <input type="text" className='form-control' placeholder='Category' value={blogDetails.category} onChange={e => setBlogDetails({ ...blogDetails, category: e.target.value })} />
                            </div>
                            <div className='mb-3 mt-2'>
                                <textarea className='form-control' id='exampleFormControlTextarea1' rows="6" placeholder='Type Your Blog.....' value={blogDetails.content} onChange={e => setBlogDetails({ ...blogDetails, content: e.target.value })}></textarea>
                            </div>


                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                theme="colored"
                autoClose={2000}
                position="top-right" />
        </div>
    )
}

export default AddBlogs