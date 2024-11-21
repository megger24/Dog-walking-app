// parent folder all reducers will funnel to this file
import {combineReducers} from 'redux'
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import walkerReducer from "./walkerReducer";
import'bootstrap/dist/css/bootstrap.min.css'
import cartReducer from './cartReducer';




const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    cart: cartReducer,
    walker: walkerReducer
})







export default rootReducer