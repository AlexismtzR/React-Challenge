import React , {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loadComments, loadPosts } from '../redux/postReducer';
import Post from './Post';

const Social = () => {
    const posts = useSelector((state) => state.posts);
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(loadPosts())
    dispatch(loadComments())
    },[])

    return(
        <div style={{borderWidth:"1px solid red"}}> 
                {posts.map((post, key) =>{
                    var comment = comments.filter( comment => comment.postId === post.id)
                    return(
                        <div key={key} style={{display:"flex", flexDirection:"column", justifyContent:"center", margin:"5px", borderRadius:"8px"}}>
                        <Post title={post.title} body={post.body} postId={post.id} comment={comment}/>
                        </div>
                    )
                })}
        </div>
    )

}


export default Social;