import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfileResponceContext } from '../context/ContextShares';
import { editProfileAPI } from '../Services/allAPI';
import { BASE_URL } from '../Services/baseurl';

function EditProfile() {

  const {editProfileResponce,setEditProfileResponce} = useContext(editProfileResponceContext)
  const user = JSON.parse(sessionStorage.getItem("existingUser"))

  const [profileDetails,setProfileDetails] = useState({
    email:user.email,password:user.password,username:user.username,profession:user.profession,bio:user.bio,profile:"",id:user._id
  })

  const [existingImage,setExistingImage] = useState("")
  useEffect(()=>{
    if(user.profile){
       setExistingImage(user.profile)
       setProfileDetails({
        email:user.email,password:user.password,username:user.username,profession:user.profession,bio:user.bio,profile:"",id:user._id

       })
    }
  },[editProfileResponce])

    const [preview,setpreview] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    
        setProfileDetails({
            email:user.email,password:user.password,username:user.username,profession:user.profession,bio:user.bio,profile:"",id:user._id
    
           })
           setpreview("")
    }
    const handleShow = () => setShow(true);

    useEffect(()=>{
if(profileDetails.profile){
    setpreview(URL.createObjectURL(profileDetails.profile))
}
    },[profileDetails.profile])

    const handleUpdate = async ()=>{
        const {username,profession,bio,profile,email,password} = profileDetails
        if(!username){
            toast.warning('Please Fill The Form Completely')
        }else{
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("profession", profession)
            reqBody.append("bio", bio)
            reqBody.append("email", email)
            reqBody.append("password", password)
            preview?reqBody.append("profile", profile):reqBody.append("profile",user.profile)

            const token = sessionStorage.getItem("token")
            if(preview){
                const reqHeader={
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                // api call
                const res = await editProfileAPI(reqBody,reqHeader)
                if(res.status===200){
                    sessionStorage.setItem("existingUser",JSON.stringify(res.data))
                    handleClose()
                    // pass responce
                    setEditProfileResponce(res.data)
                }else{
                    console.log(res.response);
                }
            }else{
                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
                // api call
                const res = await editProfileAPI(reqBody,reqHeader)
                if(res.status===200){
                    sessionStorage.setItem("existingUser",JSON.stringify(res.data))
                    handleClose()
                    // pass responce
                    setEditProfileResponce(res.data)
                }else{
                    console.log(res.response);
                }
            }
        }
    }

  return (
    <>
    
    <button onClick={handleShow} className='btn'> <i class="fa-solid fa-pencil mb-3 fs-4 "></i></button>

    <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}               
                centered     
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder' style={{ letterSpacing: '2px' }}>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="col-lg-6 mt-4">
                            <label>
                                <input type="file" style={{ display: 'none' }} onChange={e=>setProfileDetails({...profileDetails,profile:e.target.files[0]})}/>

                              { existingImage?
                               <img style={{height:'200px',borderRadius:"50%"}}  className='img-fluid'  src={ preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="" />
                               
                               :

                               <img style={{borderRadius:"50%"}}  className='img-fluid'  src={preview?preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"} alt="" />
                            
                            }
                            </label>

                        </div>
                        <div>
                            <div className='mb-3 mt-2'>
                                <input type="text" className='form-control' placeholder='Username' value={profileDetails.username} onChange={e=>setProfileDetails({...profileDetails,username:e.target.value})} />
                            </div>
                            <div className='mb-3 mt-2'>
                                <input type="text" className='form-control' placeholder='Profession'   value={profileDetails.profession} onChange={e=>setProfileDetails({...profileDetails,profession:e.target.value})} />
                            </div>
                           
                            <div className='mb-3 mt-2'>
                                <textarea className='form-control' id='exampleFormControlTextarea1' rows="3" placeholder='About You'  value={profileDetails.bio} onChange={e=>setProfileDetails({...profileDetails,bio:e.target.value})} ></textarea>
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

export default EditProfile