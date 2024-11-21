import { connect } from 'react-redux'
import { deletePost, editPost, updatePost, handleInput } from '../redux/actions'

const List = (props) => {
    // console.log(props)
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updatePost()
    }
    return (
        <div className='list-container' style={{marginLeft:'40px'}} >
            {props.posts.map((post) => {
                return props.editId !== post.id ? <section key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>{post.note}</p>
                    <div>
                        <button onClick={() => props.handleDelete(post.id)}>Delete</button>
                        <button onClick={() => props.handleEdit(post.id)}>Edit</button>
                    </div>
                </section> :
                    <section key={post.id}>
                      <form onSubmit={handleSubmit}>
            <h1>update Form</h1>
            <input
                type="text"
                name='editTitle'
          
                value={props.editTitle}
                onChange={props.handleInput}
                required={true}
            />
            <input
                type="text"
                name='editBody'
               
                value={props.editBody}
                onChange={props.handleInput}
                required={true}
            />
            <input
                type="text"
                name='editNote'
               
                value={props.editNote}
                onChange={props.handleInput}
            />
            <button type="submit">Post</button>
        </form>
                       
                    </section>
            })}
        </div>
    )
}

// this function allows me to access and read parts of my state
const mapStateToProps = (state) => {
    return {
        posts: state.app.posts,
        title: state.app.title,
        body: state.app.body,
        editId: state.app.editId,
        editTitle: state.app.editTitle,
        editBody: state.app.editBody,
        editNote: state.app.editNote

    }
}

// this function gives me access to the dispatch and my
const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => dispatch(deletePost(id)),
        handleEdit: (id) => dispatch(editPost(id)),
        handleInput: (e) => dispatch(handleInput(e.target)),
         updatePost: ()=> dispatch(updatePost())
    }
}

// export default List
export default connect(mapStateToProps, mapDispatchToProps)(List)