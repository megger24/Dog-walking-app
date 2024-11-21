import axios from 'axios'
import store from '../redux/store.js'
import * as actions from '../redux/actions'

const BASE_URL = process.env.REACT_APP_BASE_URL

const authAPI = {
    register: async (userData) => {
        console.log(userData)
        const response = await axios.post(`${BASE_URL}/register`, userData)
        if (response.status === 200) {
            let status = response.data
            console.log(response.data)
            if (status.auth) {
                // update redux store to allow access
                console.log('register was successful')
                let { userInfo, token } = response.data
                sessionStorage.setItem('token', token)
                store.dispatch(actions.authenticate(userInfo))
            } else {
                // handle error message to guide the user to fix issue
                console.log(status.message)
            }
        }
    },
    login: async (userData) => {

        const response = await axios.post(`${BASE_URL}/login`, userData)
        if (response.status === 200) {
            if (response.data.auth) {
                console.log(response.data)

                let { userInfo, token } = response.data
                sessionStorage.setItem('token', token)
                store.dispatch(actions.authenticate(userInfo))
            } else {
                console.log(response.data)
            }
        }
    },
    validateAuth: async () => {
        let token = sessionStorage.getItem('token')
        const response = await axios.post(`${BASE_URL}/refresh`, { token })
        if (response.status === 200) {
            let data = response.data
            if (data.auth) {
                // update redux store to allow access
                console.log('register was successful')
                let { userInfo } = response.data
                store.dispatch(actions.authenticate(userInfo))
            } else {
                // handle error message to guide the user to fix issue
                console.log(data.message)
            }
        }
    },
    addCart: async (cart)=> {
        const response = await axios.post( `${BASE_URL}/cart`, cart)
        if(response.status=== 200){
            console.log('sent')
        }
    },
    addAppointment: async (bookingInfo)=> {
        console.log(bookingInfo)
        const response = await axios.post( `${BASE_URL}/appointments`, bookingInfo)
        if(response.status=== 200){
            console.log('sent')
        }
    },
    getAppointment: async (_id) => {
        console.log(_id)
        const response = await axios.get( `${BASE_URL}/appointments/${_id}`)
        if (response.status=== 200){
            console.log(response.data)
          let appointment = response.data
          store.dispatch(actions.getWalkerAppointments(response.data))
        }
    },
}
export default authAPI