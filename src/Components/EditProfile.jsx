import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function EditProfile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                <input type="file" style={{ display: 'none' }} />
                                <img style={{borderRadius:"50%"}}  className='img-fluid'  src={ "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"} alt="" />
                            </label>

                        </div>
                        <div>
                            <div className='mb-3 mt-2'>
                                <input type="text" className='form-control' placeholder='Username'  />
                            </div>
                            <div className='mb-3 mt-2'>
                                <input type="text" className='form-control' placeholder='Profession'  />
                            </div>
                           
                            <div className='mb-3 mt-2'>
                                <textarea className='form-control' id='exampleFormControlTextarea1' rows="3" placeholder='About You' ></textarea>
                            </div>


                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark">Update</Button>
                </Modal.Footer>
            </Modal>
   
    </>
  )
}

export default EditProfile