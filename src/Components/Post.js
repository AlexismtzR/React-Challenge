import React , {useState} from 'react';
import { connect } from 'react-redux'
import userimg from '../img/user.jpg'
import "./style.css"

const Post = ({title, body, comment, addcomment, usercomment}) => {

    const [com, setCom] = useState(false)
    const [leavecomment, setleave] = useState("")

    return(
        <div className="post">
            <div className="post_header">
                <div className='post_headerleft'>
                    <img src={userimg} className='post_profilepic'/>
                    <p style={{marginLeft: "8px"}}>Carlos Alexis Martinez Rangel</p>
                </div>
            </div>
            <div className="post_center">
                <h2>{title}</h2>
                <h3>{body}</h3>
                <button onClick={() =>setCom(!com)}>Comments</button>
            </div>
                {
                    com ? 
                    <div>
                    {
                        comment.map((comment, key) => {
                            return(
                                <div key={key}>
                                <p>
                                    <span style={{fontWeight:"500", marginRight:"8px"}}>{comment.name}:</span>
                                    {comment.body}
                                </p>
                                <p>
                                    <span style={{fontWeight:"500", marginRight:"4px"}}>Email:</span>
                                    {comment.email}
                                </p>
                                 </div>   
                            )   
                        })
                    }
                    {
                        usercomment ?                                 <p>
                        <span style={{fontWeight:"500", marginRight:"8px"}}>User Comment Store on state/redux:</span>
                        {usercomment}
                    </p>:<></>
                    }
                    <div style={{margin:"0px 16px"}}>
                        <textarea name="create a post"
                         rows="2" 
                         value={leavecomment} 
                         placeholder="Leave a comment" 
                         style={{border:"none", width:"100%", fontSize:"16px", marginTop:"8px", resize:"none"}}
                         onChange={(e) => setleave(e.target.value)}>
                        </textarea>
                        <button
                        className="button"
                        onClick={()=> addcomment(leavecomment)}
                        >
                        Comment
                        </button>                   
                    </div>
                    </div>
                    :<></>
                }
        </div>
    )
}

const mapStateToProps = state => ({
    usercomment: state.usercomment
})

const mapDispatchToProps = dispatch => ({
    addcomment(comm) {
        dispatch({
            type:"ADD_COMMENT",
            comm
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);