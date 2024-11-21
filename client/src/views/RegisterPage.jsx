import Form from "../components/Form";
import Input from "../components/Input";
import FormFooter from "../components/FormFooter";
import { connect } from 'react-redux'
import * as actions from '../redux/actions.js'
import authAPI from "../API/authAPI";
import {useEffect}from 'react'
import {useNavigate} from 'react-router-dom'


const RegisterPage = (props) => {
    let navigate= useNavigate()
    useEffect(()=>{
        if(props.isAuth){
            navigate('/private')
        }
    },[props.isAuth])

    const handleSubmit = (e) => {
        e.preventDefault()
   
        console.log('test')
        console.log(props.confirmPassword, props.password)
        if (props.confirmPassword === props.password) {
            let userData = {
                username: props.username,
                password: props.password,
                firstName: props.firstName,
                lastName: props.lastName,
                email: props.email,
            }
            authAPI.register(userData)
        }
    }
    return (
        <div className='sign-in-container'>
            <div className="auth-form">
                <Form
                    handleSubmit={handleSubmit}
                    title='SignUp'
                    className='registration-input-container'
                    btnText='Sign Up'>
                    <Input
                        name='firstName'
                        placeholder='First Name:'
                        type="text"
                        handleInput={props.handleInput}
                        value={props.firstName}

                    />
                    <Input
                        name='lastName'
                        placeholder='Last Name:'
                        handleInput={props.handleInput}
                        type="text"
                        value={props.lastName}

                    />
                    <Input
                        name='username'
                        placeholder='Username:'
                        type="text"
                        handleInput={props.handleInput}
                        value={props.username}

                    />
                    <Input
                        name='email'
                        placeholder='Email:'
                        handleInput={props.handleInput}
                        type="email"
                        value={props.email}

                    />
                    <Input
                        name='password'
                        placeholder='Password:'
                        handleInput={props.handleInput}
                        type="password"
                        value={props.password}

                    />
                    <Input
                        name='confirmPassword'
                        placeholder='Confirm Password:'
                        handleInput={props.handleInput}
                        type="password"
                        value={props.confirmPassword}

                    />
                    


                </Form>
                <FormFooter
                    message='Already a user?'
                    btnTxt='Login'
                    path='/login'


                />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        password: state.auth.password,
        firstName: state.auth.firstName,
        lastName: state.auth.lastName,
        email: state.auth.email,
        confirmPassword: state.auth.confirmPassword,
        isAuth: state.auth.isAuth
    }
}
const mapDistpatchToProps = (dispatch) => {
    return {
        handleInput: (e) => dispatch(actions.handleInput(e.target))
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(RegisterPage)
