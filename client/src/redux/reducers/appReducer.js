
import * as types from '../types'



let initialState = {
   toggle: false,
   title: '',
    body: '',
    note: '',
    posts: [],
    editTitle: '', 
    editBody: '', 
    editNote: '', 
    editId: ''
   }
   const appReducer = (state=initialState, action) => {
    let id = ''
    switch (action.type) {
        case types.HANDLE_INPUT:
            
            return {
                
                ...state,
                [action.payload.name]: action.payload.value
            }
        case types.ADD_POST:
            let newPost = {
                title: state.title,
                body: state.body,
                note: state.note,
        
            }
            return {
                
                ...state,
                title: '',
                body: '',
                posts: [newPost, ...state.posts]
            }
            case types.DELETE_POST:
                 id = action.payload
                let posts =  state.posts.filter((post)=>post.id !== id)
                return {
                    ...state,
                    posts
                }
            case types.EDIT_POST:
                id = action.payload
                let editPost = state.posts.find((post)=> post.id ===id)
                return {
                    ...state,
                    editId : id,
                    editBody: editPost.body,
                    editTitle: editPost.title,
                    editNote:editPost.note,
                }
                case types.UPDATE_POST :
                    let updatedPosts = state.posts.map(post=>{
                       if(post.id === state.editId){
                           post.title = state.editTitle
                           post.body = state.editBody
                           post.note = state.editNote
                       }
                       return post
                    })
                    
                    return{
                        ...state,
                        posts:updatedPosts,
                        editTitle : '',
                        editBody: '',
                        editNote: '',
                        editId:'',


                    }

        default:
            return state;
    }
}
   
   
   
   export default appReducer
   