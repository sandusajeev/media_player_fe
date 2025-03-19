import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>

      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly '>
        <Row>
          <Col>
            <h3 className='textStyle'>WELCOME TO <span className='text-warning'>MEDIA PLAYER</span></h3>
            <p className='textStyle mt-4' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit omnis non adipisci libero, cumque voluptate laudantium ipsa quas cupiditate officiis vel laboriosam illum perspiciatis iste dicta dolor nulla. Iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis unde enim ratione aliquam fuga, voluptate harum dicta quos dolorum est atque in ex modi? Est aspernatur provident quas cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolorem, eligendi, esse possimus totam hic est atque blanditiis ratione laudantium voluptate rem natus inventore. Officiis consectetur veniam velit sed. Quam.</p>
            <Link to={'/home'}>
              <button className='btn btn-warning mt-3'>GET STARTED <i className="fa-solid fa-arrow-right ms-2"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' style={{ height: '400px', width: '400px' }} />
          </Col>
        </Row>
      </Container>

      {/* second section features */}
      <div className='container'>
        <h3 className='textStyle'>FEATURES</h3>
        <div className='d-flex align-items-center justify-content-evenly mt-5'>
          <Card style={{ width: '18rem', backgroundColor:'black', color:'white', border:'white 2px solid' }}>
            <Card.Img variant="top" height="290px" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWQwZGEzdnFrb3BvNGU2Zmp1aDdpMHBnc2w5MGhyZ2pjZTFsYTJoOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5brXCcJQW1JJGkOgQs/giphy.gif" />
            <Card.Body>
              <Card.Title>ADD VIDEOS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">ADD VIDEOS</Button>
              </Link>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', backgroundColor:'black', color:'white', border:'white 2px solid' }}>
            <Card.Img variant="top" height="290px" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWJ1OTYwMmFndnFhaGU3MjBpaTFmdjgyZWl2MDNtdTB5cnRyaXpoOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iOGROqwbUThmEuNlDx/giphy.gif" />
            <Card.Body>
              <Card.Title>VIEW VIDEOS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">VIEW VIDEOS</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', backgroundColor:'black', color:'white', border:'white 2px solid' }}>
            <Card.Img variant="top" height="290px" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21oNDd6cHpqcjZ2c2t4MnNocDY3ZXFoN3BudHNsM3dncnFhdm5naCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3fiwapuHWQgKK4G8jK/giphy.gif" />
            <Card.Body>
              <Card.Title>WATCH HISTORY</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">VIEW HISTORY</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* thrid section */}
<div className='container mt-5 mn-5 border border-2 border-secondary rounded p-5'>
  <Row>
    <Col>
    <h3 className='textStyle'>SIMPLE AND POWERFUL</h3>
    <p className='textStyle'> <span className='fs-5 fw-bolder'>PLAY EVERYTHING: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ipsum modi ab suscipit nisi exercitationem inventore facilis laboriosam libero quia, sunt perspiciatis eos ducimus quidem non totam at accusantium similique.</p>
    <p className='textStyle'> <span className='fs-5 fw-bolder'>PLAY EVERYTHING: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ipsum modi ab suscipit nisi exercitationem inventore facilis laboriosam libero quia, sunt perspiciatis eos ducimus quidem non totam at accusantium similique.</p>
    <p className='textStyle'> <span className='fs-5 fw-bolder'>PLAY EVERYTHING: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ipsum modi ab suscipit nisi exercitationem inventore facilis laboriosam libero quia, sunt perspiciatis eos ducimus quidem non totam at accusantium similique.</p>

    </Col>
    <Col>
    <div>
    <iframe width="100%" height="400" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </Col>
  </Row>
</div>
    </>
  )
}

export default LandingPage