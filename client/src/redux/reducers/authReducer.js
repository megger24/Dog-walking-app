import * as types from "../types"
import {combineReducer} from 'redux'


let initialState = {
     isAuth: false,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    userInfo: {},
 
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case types.AUTHENTICATE:
            return {
                ...state,
                isAuth: true,
                userInfo: action.payload,
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: "",
                confirmPassword: "",


            }
            case types.LOGOUT:
                return {
                    ...state,
                   isAuth: false,
                    
                    userInfo: {},

                }
        default:
            return state
    }
}



export default authReducer

