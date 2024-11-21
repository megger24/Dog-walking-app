import { Navigate, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'
const PrivateRoutes = (props) => {

    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const verifyAuth = async () => {
            if (props.auth.isAuth) {
            setTimeout(()=>   setLoading(false), 2000)
            }
        }
        verifyAuth()
    }, [props.auth.isAuth])
    return (
        <>
            {isLoading ? (
               <Spinner />
            ) : (
                props.auth.isAuth ? <Outlet /> : <Navigate to='/login' />
            )
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, null)(PrivateRoutes)