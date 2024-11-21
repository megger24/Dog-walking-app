import {Navigate, Outlet} from 'react-router-dom'
import {connect} from 'react-redux'

const PublicRoutes = (props) => {
    return (
        <>
        {props.auth.isAuth ? <Navigate to='/private'/>: <Outlet/>}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}
export default connect(mapStateToProps,null)(PublicRoutes)