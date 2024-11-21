import * as actions from '../redux/actions.js'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as brands from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
import HomePage2 from '../assets/images/HomePage2.png'
import Gold from '../assets/images/Gold.png'
import Gold2 from '../assets/images/Gold2.png'
import Basic from '../assets/images/Basic.png'
import Basic2 from '../assets/images/Basic2.png'
import Premium from '../assets/images/Premium.png'
import Premium2 from '../assets/images/Premium2.png'
const Packages = (props) => {
  const navigate = useNavigate()

const handleBasic = ()=> {
  let item = {
    item:'Basic',
     price:99.99
  } 
  props.addToCart(item)
  navigate("/checkout")
  }

  const handleGold = ()=> {
    let item = {
      item:"Gold",
      price:299.99
    }
     props.addToCart(item)
     navigate("/checkout")} 
const handlePremium = ()=> {
    let item = {
      item:"Premium",
      price:399.99
    }
     props.addToCart(item)
     navigate("/checkout")}
     
  return (
    <div id='package'>
      <div class="columns">
        <ul class="price">
          <li class="header"><img src={Basic2} style={{height:'55px'}}/> Basic <img src={Basic} style={{height:'55px'}}/></li>
          <li class="grey">$ 99.99 / year</li>
          <li class='grey'>Basic dog walking service is a scheduled walk once per day for 7 days.</li>
          <li class="grey">
          {props.isAuth ?  <button class="button" onClick={handleBasic}>check out</button>: <a href="/login" class="button" type='submit'>check out</a>}
            </li>
        </ul>
      </div>
      <div class="columns">
        <ul class="price">
          <li class="header"><img src={Gold} style={{height:'55px'}}/> Gold <img src={Gold2} style={{height:'55px'}}/></li>
          <li class="grey">$299.99 / year</li>
          <li class='grey'>The Gold package is twice a day for 7 days and includes a bath once a week</li>
          <li class="grey">
            
           {props.isAuth ?  <button class="button" onClick={handleGold}>check out</button> : <a href="/login" class="button" type='submit'>check out</a>}
            
            </li>

        </ul>
      </div>
      <div class="columns">
        <ul class="price">
          <li class="header"><img src={Premium2} style={{height:'55px'}}/> Premium <img src={Premium} style={{height:'55px'}}/></li>
          <li class="grey">$ 499.99 / year</li>
          <li class='grey'>The Premium  package will include custom schedules, dog sitting, and grooming </li>

          <li class="grey">
          {props.isAuth ?  <button class="button" onClick={handlePremium}>check out</button> : <a href="/login" class="button" type='submit'>check out</a>}
            </li>
        </ul>
      </div>
<br/>
      <footer style={{ backgroundColor: 'white', width: '50%', position:'absolute', bottom:'20%', left:'25%'}}>


       
        <i className='icons'><FontAwesomeIcon icon={brands.faCcVisa} style={{ height: '40px', width: '50px', margin: '10px' }} /></i>
        <i className='icons'><FontAwesomeIcon icon={brands.faCcDiscover} style={{ height: '40px', width: '50px', margin: '10px' }} /></i>
       
        <i className='icons'><FontAwesomeIcon icon={brands.faCcAmex} style={{ height: '40px', width: '50px', margin: '10px' }} /></i>
        <i className='icons'><FontAwesomeIcon icon={brands.faCcPaypal} style={{ height: '40px', width: '50px', margin: '10px' }} /></i>
        <img src={HomePage2}  style={{float:'right', height:'70px', marginRight:'30px'}}/>

      </footer>
    </div>
  )
}
const mapStateToProps = (state)=> {
  return {
      username: state.auth.username,
      password:state.auth.password,
      isAuth:state.auth.isAuth
  }
}
const mapDistpatchToProps = (dispatch) => {
  return{
      handleInput:(e)=> dispatch(actions.handleInput(e.target)),
      addToCart:(item)=> dispatch(actions.addToCart(item))
  }
}
export default connect(mapStateToProps,mapDistpatchToProps)(Packages)
