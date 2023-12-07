import React from 'react'
import { Col, Row } from 'react-bootstrap'
import techimage from '../Assets/tech1.webp'
import BlogCard from '../Components/BlogCard'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    {/* landing section */}
  <div style={{width:'100%',height:'90vh',backgroundColor:'#fff'}}>
    <Row className='align-items-center p-5' style={{marginTop:'20%'}}>
      <Col sm={12} md={6}>
      <h1 style={{color:'black',fontSize:'60px',fontWeight:'700',letterSpacing:'5px' }}>TNO</h1>
      <h3>TECH NEWS ONLINE</h3>
      <h6 style={{letterSpacing:'2px'}}>Everything You Need to Know <br /> About Tech</h6>
      </Col>
      <Col style={{marginRight:'150px'}}>
     
        <img style={{height:'100px'}} src={techimage} alt="" />
        
     
      </Col>
    </Row>
  </div>
  {/* all blogs */}
  <div className="all-blogs mt-5">
    <h1 className='text-center fw-bolder'>Latest news</h1>
    <Row>
      <div sm={12} md={6} lg={6}>
      <BlogCard/>
      </div>
      <div sm={12} md={6} lg={6}>
      <BlogCard/>
      </div>
      <div sm={12} md={6} lg={6}>
      <BlogCard/>
      </div>
      <div sm={12} md={6} lg={6}>
      <BlogCard/>
      </div>
    </Row>
  </div>
  <div className="text-center mt-5 mb-5"> <Link className='text-dark fs-5' to={'/allblogs'}>View More News</Link></div>

    </>
  )
}

export default Home