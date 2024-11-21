import * as types from '../types'

let initialState = {
    username: '',
    _id: '',
    firstName: '',
    lastName: '',
    appointments: []
}

const walkerReducer = (state = initialState, action) => {
    let id = ''
    switch (action.type) {
        case types.ADD_WALKER:
            console.log(action.payload)

            return {

                ...state,
                walker: { ...action.payload }
            }

        case types.GET_WALKER_APPOINTMENTS:
            console.log(action.payload)

            return {

                ...state,
                appointments: [ ...action.payload ]
            }

        default:
            return state;
    }
}



export default walkerReducer