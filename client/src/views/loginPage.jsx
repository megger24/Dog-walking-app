import Form from '../components/Form.jsx'
import FormFooter from '../components/FormFooter'
import Input from '../components/Input.jsx'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import authAPI from '../API/authAPI.js'


const LoginPage = (props) => {
    let navigate= useNavigate()
  useEffect(()=>{
      if(props.isAuth){
          navigate('/private')
      }
  },[props.isAuth])
  
    const handleSubmit = (e)=> {
       e.preventDefault()
           let userData = {
         password:props.password,
         username: props.username
           }
       
    authAPI.login(userData)
   }
   
    return (         <div className='sign-in-container'>
  
 
        <div className='auth-form'>
            <Form
                handleSubmit={handleSubmit}
                title='LOGIN'
                className='login-input-container'
                btnText='Login'>
                <Input
                    name='username'
                    placeholder='Username:'
                    handleInput={props.handleInput}
                    value={props.username}
                     type='text'
                />
                <Input
                    name='password'
                    placeholder='Password:'
                    handleInput={props.handleInput}
                    value={props.password}
                    type='password'
                />
                  
            </Form>
            <FormFooter
                message='Need an account?'
                btnTxt='Sign UP'
                path='/register'
                

            />
      
       </div></div>
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
        handleInput:(e)=> dispatch(actions.handleInput(e.target))
    }
}
export default connect(mapStateToProps,mapDistpatchToProps)(LoginPage)