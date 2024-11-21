import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../redux/actions.js'

import LogoDog from '../assets/images/LogoDog.png'

const NavBar = (props) => {
    const nav = useNavigate()
    return (
        <>

            <div className='nav-bar-container'>
                <img src={LogoDog} alt="dog" id='logo-dog' />
                {props.isAuth ? <button className="login-button" onClick={() => { props.logout(); sessionStorage.removeItem('token') }}>Log Out</button> :
                    <button className="login-button"  onClick={() => nav("/login")}>login</button>}
                <nav className='nav-bar'>

                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/packages' className='nav-link'>Dog Walking Packages</NavLink>

                    {props.isAuth ? <NavLink to='/private' className='nav-link'>Private Account</NavLink> : null}
                </nav>
            </div>
            <Outlet />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)