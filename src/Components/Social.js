import React , {useState, useEffect} from 'react';
import Post from './Post';

const Social = () => {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        const getPost = async (param) => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/${param}`)
            const data = await res.json()
            param == 'posts' ? setPosts(data) : setComments(data)
        }
        

        getPost('posts')
        getPost('comments')
    },[])

    return(
        <div style={{borderWidth:"1px solid red"}}> 
                {posts.map((post, key) =>{
                    var comment = comments.filter( comment => comment.postId === post.id)
                    return(
                        <div key={key} style={{display:"flex", flexDirection:"column", justifyContent:"center", margin:"5px", borderRadius:"8px"}}>
                        <Post title={post.title} body={post.body} comment={comment}/>
                        </div>
                    )
                })}
        </div>
    )

}

export default Social;