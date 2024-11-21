import * as types from './types'

export const handleInput = (input) => {
    return{
        type:types.HANDLE_INPUT,
        payload: input
    }
}
export const authenticate = (userInfo) => {
    return{
        type:types.AUTHENTICATE,
        payload: userInfo
    }
}
export const logout = ()=> {
    return {
        type: types.LOGOUT
    }
}
export const addPost = () => {
    return {
        type: types.ADD_POST
    }
}


export const deletePost = (id) => {
    return {
        type: types.DELETE_POST,
        payload: id
    }
}

export const editPost = (id) => {
    return {
        type: types.EDIT_POST,
        payload: id
    }
}
export const updatePost = () => {
    return {
        type: types.UPDATE_POST,
      
    }
}

export const addToCart = (item) => {
    return{
        type:types.ADDTOCART,
        payload:item

    }
} 
export const clearCart = () => {
    return {
        type:types.CLEARCART
    }
}
export const handleCartInput = (input) => {
    return {
        type:types.HANDLECARTINPUT,
        payload:input
    }
}
export const addWalker = (userInfo) => {
    return {
        type:types.ADD_WALKER,
        payload:userInfo
    }
}

export const getWalkerAppointments = (appointmentInfo) => {
    return {
        type:types.GET_WALKER_APPOINTMENTS,
        payload:appointmentInfo
    }
}