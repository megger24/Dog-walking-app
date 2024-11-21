import * as types from '../types'
let initialState = {
    cart: [],
    item: '',
    price: '',
    cardname:'',
    cardnumber:'',
    expmonth:'',
    expyear:'',
    cvv:''
}
const cartReducer = (state=initialState, action) =>{
    switch(action.type){
        case types.ADDTOCART: 
        return{
            ...state, 
            cart:[action.payload]
        }
     
        case types.CLEARCART:
            return{
                ...state,
                cart:[]
            }
            default:
                return state
    
    case types.HANDLECARTINPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
    }      
  }
}
export default cartReducer