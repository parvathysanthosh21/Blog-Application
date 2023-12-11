import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { tokenAuthorisationContext } from '../context/TokenAuth';

function Auth({register,setLoginResponse}) {
  const {isAuthorised, setAuthorised} = useContext(tokenAuthorisationContext)
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    username:"",email:"",password:""
  })
  const isRegister = register?true:false
  const handleRegister = async (e)=>{
    e.preventDefault()
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.info("Please Fill The Form Completely")
    }else{
      const result = await registerAPI(userData)
      if(result.status===200){
        toast.warning(`${result.data.username} has registered successfully!!!`)
        setUserData({
          username:"",email:"",password:""
        })
        navigate('/login')
      }else{
        toast.warning( result.response.data)
        console.log(result);
      }
    }
  }
  const handleLogin = async (e)=>{
    e.preventDefault()
    const {email,password} = userData
    if( !email || !password){
      toast.info("Please Fill The Form Completely")
    }else{
      const result = await loginAPI(userData)
      if(result.status===200){
        // toast.warning(`${result.data.username} has registered successfully!!!`)
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setAuthorised(true)
        setLoginResponse(true)
        setUserData({
          email:"",password:""
        })
        navigate('/')
      }else{
        toast.warning( result.response.data)
        console.log(result);
      }
    }
  }
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
          <Form.Control type="email" placeholder="Enter Username" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})}/>
         </Form.Group>

        }
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter Email" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}/>
         </Form.Group>
         <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="password" placeholder="Enter Passowrd" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})}/>
         </Form.Group>
       </Form>
       {
        isRegister ?
        <div>
          <button onClick={handleRegister} className='btn w-100 mb-2 text-light ' style={{backgroundColor:'black'}}>
            Sign Up
          </button>
          <p className='text-center mb-3 mt-2' >Already have account? Click here to  <Link to={'/login'}>Sign In</Link></p>
        </div>:
        <div>
        <button onClick={handleLogin} className='btn w-100 mb-4 text-light' style={{backgroundColor:'black'}}>
          Sign In
        </button>
        <p className='text-center'>New user ? Click here to  <Link to={'/register'}>Sigh Up</Link></p>
      </div>

       }
      </div>
      <ToastContainer
      theme="colored"
      autoClose={2000}
      position="top-right" />
    </div>
  )
}

export default Auth