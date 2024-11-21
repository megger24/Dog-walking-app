import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios"
import { addWalker } from '../redux/actions'
import yellow from '../assets/images/yellow.jpg'
import List from '../components/blogList'
import Form from '../components/blogform'
import twoDogs from '../assets/images/twoDogs.png'
import grey from '../assets/images/grey.jpg'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'


const BASE_URL = process.env.REACT_APP_BASE_URL

const Private = (props) => {
  const [walkers, setWalkers] = useState([])



  useEffect(() => {
    const getWalkers = async () => {
      const response = await axios.get(`${BASE_URL}/walkers`)
      console.log(response.data)
      setWalkers(response.data)
    }
    getWalkers()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const handleBookClick = (walker) => {
    // original onClick: props.setBookWalker(walker)
    console.log("handleBookClick", walker)
    props.addWalker(walker)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} >
      <div className="content"  >
        <h1 className="animate__animated animate__tada" id='welcome' style={{ backgroundColor: 'darkgrey', margin: '70px', boxShadow: ' 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)', fontFamily: 'cursive' }}> Welcome {props.username}</h1>

        <h2 style={{ textAlign: 'center', fontFamily: 'cursive' }}>Meet Our Dog Walkers</h2>
        <div className="dog-walkers">


          {walkers.map(walker => (
            <div key={walker.username} className="card">
              <img src={require(`../assets/images/${walker.walkerImage}`)} alt="Jane" />
              <h3>{walker.username}</h3>
              <p className="w3-opacity">Walker</p>
              <p>{walker.walkerDescription}</p>
              <p>
                <Link to="/WalkerPage"><button onClick={() => handleBookClick(walker)} className="card-button">Book</button></Link>
              </p>
            </div>
          ))}

         
        </div>

        <h2 className='text'> Need To Message your Dog Walker or have specific instructions? </h2>
        <h2 className='text'>Then use our message board</h2>
        <h1 className='message-board'>Message Board</h1>

        <Form />
        <List />


        <Carousel className='carousel-container'>
          <Carousel.Item>
            <img
              className="carouselImage"
              src={grey}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImage"
              src={twoDogs}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImage"
              src={yellow}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className='footerText'>
          <footer style={{ backgroundColor: 'white', width: '100%', marginTop: '20px', }}>
            <FontAwesomeIcon icon={brands.faFacebook} style={{ height: '40px', width: '50px', margin: '10px', }} />
            <FontAwesomeIcon icon={brands.faAndroid} style={{ height: '40px', width: '50px', margin: '10px' }} />
            <FontAwesomeIcon icon={brands.faSnapchat} style={{ height: '40px', width: '50px', margin: '10px' }} />
          </footer>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.userInfo.username
    // id: state.a
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // handleInput: (e) => dispatch(handleInput(e.target)),
      // addPost: () => dispatch(addPost())
      addWalker: (walker) => dispatch(addWalker(walker))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Private)

