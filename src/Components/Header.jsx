import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
<Navbar style={{ backgroundColor: 'black' ,zIndex:"1",marginBottom:'25px'}} className="position-fixed top-0 w-100" >
        <Container>
          <Navbar.Brand>
            <Link to={'/'}  style={{ textDecoration: 'none', color: 'white',fontSize:'60px',fontWeight:'700' }}>
               TNO
              
            </Link>
          </Navbar.Brand>
        
            <h6><Link style={{textDecoration:'none',color:"white"}} to={'/userprofile'}>MY  ACCOUNT</Link></h6>
                 </Container>
      </Navbar>
    </>
  )
}

export default Header