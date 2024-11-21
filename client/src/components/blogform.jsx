import { connect } from "react-redux" // used to connect a react component to the store
import { handleInput, addPost } from '../redux/actions'

const Form = ({ title, body, note, handleInput, addPost }) => {
   

    const handleSubmit = (e) => {
        e.preventDefault()
        addPost()
    }

    return (
        <form className="blog-container" onSubmit={handleSubmit}>
            
            <input className="input"
                type="text"
                name='title'
                placeholder="Title:"
                value={title}
                onChange={handleInput}
                required={true}
            />
            <input className="input"
                type="text"
                name='body'
                placeholder="Body:"
                value={body}
                onChange={handleInput}
                required={true}
            />
            <input className="input"
                type="text"
                name='note'
                placeholder="Note:"
                value={note}
                onChange={handleInput}
            />
               <button className="card-button" style={{width:'60px'}}type="submit">Post</button>
        </form> 
    
    )
}


const mapStateToProps = (state) => {
    return {
        title: state.app.title,
        body: state.app.body,
        note: state.app.note
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (e) => dispatch(handleInput(e.target)),
        addPost: () => dispatch(addPost())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form) 