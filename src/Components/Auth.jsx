import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({register}) {
  const isRegister = register?true:false
  return (
    <div className='mt-5 d-flex justify-content-center align-items-center' style={{width:'100%',height:'80vh'}}>
      <div className='container shadow rounded' style={{width:'500px'}}>
      <h5 className='fw-bolder text-dark mb-3 mt-2 pb-2 text-center mt-5'>
          {
              isRegister ? 'Sign up to your account': 'Sign In to your Account'
          }
      </h5>
      <Form className='w-100'>
        {
          isRegister &&
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter Username" />
         </Form.Group>

        }
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter Email" />
         </Form.Group>
         <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter Passowrd" />
         </Form.Group>
       </Form>
       {
        isRegister ?
        <div>
          <button className='btn w-100 mb-2 text-light ' style={{backgroundColor:'black'}}>
            Sign Up
          </button>
          <p className='text-center mb-3 mt-2' >Already have account? Click here to  <Link to={'/login'}>Sign In</Link></p>
        </div>:
        <div>
        <button className='btn w-100 mb-4 text-light' style={{backgroundColor:'black'}}>
          Sign In
        </button>
        <p className='text-center'>New user ? Click here to  <Link to={'/register'}>Sigh Up</Link></p>
      </div>

       }
      </div>
    </div>
  )
}

export default Auth