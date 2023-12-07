import React from 'react'
import { Button, Card } from 'react-bootstrap'

function MyBlogs() {
  return (
  <>
  <div className='d-flex justify-content-end align-items-end me-5'>
  <button style={{backgroundColor:'black',width:'150px'}} className='p-1 ms-5 text-light'>Add Vlogs</button>
  </div>
      <div className='ms-5 me-5 mt-5'>
         <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://imageio.forbes.com/specials-images/imageserve/633a774a842d06ecd68286ff/The-5-Biggest-Business-Trends-For-2023/960x0.jpg?height=430&width=711&fit=bounds" />
        <Card.Body>
          <Card.Title>Bussiness</Card.Title>
          <h3 className='fw-bolder'>IoT Market Worth $8.8 Billion In 2017 </h3>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content...
          </Card.Text>
          <div className='me-auto d-flex align-items-end justify-content-end'>
               <i class="fa-regular fa-pen-to-square me-3"></i>
               <i class="fa-solid fa-trash"></i>
          </div>
        </Card.Body>
      </Card>
      </div>
  </>
  )
}

export default MyBlogs